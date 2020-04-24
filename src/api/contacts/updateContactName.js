import axios from 'axios';
import {BASE_URL, CONTACT_UPDATED_TOPIC} from 'Redux/constants';
import PubSub from 'pubsub-js';

const pushToTopic = (data) => {
    PubSub.publish(CONTACT_UPDATED_TOPIC , data);
}

const updateContactName = (userID, contactName, contactEmail) => {

	let updatedContact = {
	        	"contactName" : contactName, 
	        	"contactEmail" : contactEmail
	        };
	
	return axios.put(`${BASE_URL}/${userID}/contacts`, updatedContact)
			.then(response => 
			{	
				pushToTopic(response.data);
				return response.data;
			});

}

export default updateContactName;

