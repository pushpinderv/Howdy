import axios from 'axios';
import {BASE_URL} from 'Redux/constants';

const getProfileName = (userID) => 
{
	return axios.get(`${BASE_URL}/${userID}/profile/name`).then(response => response.data);
}

export default getProfileName;