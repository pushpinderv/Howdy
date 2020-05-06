import axios from 'axios';
import {BASE_URL} from 'Redux/constants';
import imageCompression from 'browser-image-compression';

const uploadProfilePhoto = (userID, file) => {

	const fd = new FormData();
  	console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
 
	var options = {
	maxSizeMB: 1,
	maxWidthOrHeight: 512,
	useWebWorker: true
	}

	return imageCompression(file, options)
	.then((compressedFile) => {
		
		console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
		fd.append('image', compressedFile, file.name);
	
		return axios.post(`${BASE_URL}/${userID}/profile/photo`, fd)
				.then(response => {
					let url = response.data.url;
					return url;
				});
	})
	.catch((error) => {
		console.log(error.message);
		return '';
	});

	

}

export default uploadProfilePhoto;