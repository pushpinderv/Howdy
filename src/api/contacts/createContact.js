import axios from 'axios';
import {BASE_URL, CONTACT_CREATED_TOPIC} from 'Redux/constants';
import PubSub from 'pubsub-js';

const pushToTopic = (data) => {
    PubSub.publish(CONTACT_CREATED_TOPIC , data);
}

const createContact = (userID, contactName, contactEmail) => {
	
	return axios.post(`${BASE_URL}/${userID}/contacts`, 
			{
	        	"contactName" : contactName, 
	        	"contactEmail" : contactEmail
	        })
			.then(response => 
				{
					pushToTopic(response.data);
					return response.data;
				});

}

export default createContact;