import axios from 'axios';
import {BASE_URL} from 'Redux/constants';

const uploadProfilePhoto = (userID, file) => {

	const fd = new FormData();
	fd.append('image', file, file.name);
	
	return axios.post(`${BASE_URL}/${userID}/profile/photo`, fd)
			.then(response => {
				let url = response.data.url;
				return url;
			});

}

export default uploadProfilePhoto;