import axios from 'axios';
import {BASE_URL} from 'Redux/constants';

const getContacts = (userID) => 
{
	return axios.get(`${BASE_URL}/${userID}/contacts`)
				.then(response => {
					return response.data;
				});
}

export default getContacts;