import axios from 'axios';
import {BASE_URL} from 'Redux/constants';

const getProfilePhoto = (userID) => 
{
	return axios.get(`${BASE_URL}/${userID}/profile/photo`).then(response => response.data);
}

export default getProfilePhoto;