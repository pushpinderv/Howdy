import axios from 'axios';
import {BASE_URL, CONTACT_CREATED_TOPIC, CONTACT_UPDATED_TOPIC} from 'Redux/constants';
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
					if(response.status === 400)
					{
						return response;
					}
					else{	
						pushToTopic(response.data);
						PubSub.publish(CONTACT_UPDATED_TOPIC, {name : contactName, email : contactEmail});
						return response.data;
					}

			})
			.catch(err => {
				return {status : 400}
			})
			;

}

export default createContact;