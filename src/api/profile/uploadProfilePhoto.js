import axios from 'axios';
import {BASE_URL} from 'Redux/constants';
import imageCompression from 'browser-image-compression';

const uploadProfilePhoto = (oldUrl, userID, file) => {

	const fd = new FormData();
  	console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
 
	var options = {
	maxSizeMB: 1
	}

	return imageCompression(file, options)
	.then((compressedFile) => {
		
		console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
		fd.append('image', compressedFile, file.name);
	
		return axios.post(`${BASE_URL}/${userID}/profile/photo`, fd)
				.then(response => {
					let url = response.data.url;
					return {success : true, url :url};
				});
	})
	.catch((error) => {
		console.log(error.message);
		return {success : false, url :oldUrl, error : error.message};
	});

	

}

export default uploadProfilePhoto;