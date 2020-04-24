import axios from 'axios';
import {BASE_URL} from 'Redux/constants';

const updateProfileName = (userID, name) => {
	
	return axios.post(`${BASE_URL}/${userID}/profile/name`, {"name" : name})
			.then(response => {
				let updatedName = response.data;
				return updatedName;
			});

}

export default updateProfileName;