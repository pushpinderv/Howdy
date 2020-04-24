import {CONTACT_UPDATED_TOPIC, CONTACT_CREATED_TOPIC} from 'Redux/constants';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import getContacts from 'api/contacts/getContacts';
import PubSub from 'pubsub-js';

export const useSubscribeToContacts = () => {

	const [contacts, setContacts] = useState([]);

	let myID = useSelector(state => state.myID);

	const updateContacts = (data) => {

		let arr = [...contacts];

		const index = arr.findIndex((e) => e.email === data.email);

		//Contact not in list
		if (index === -1) 
	    {

	    	let contact = {
	    		email : data.email,
	    		name : data.name,
	    		photo_url : data.photo_url,
	    		time_stamp : data.time_stamp,
	    		chat_id : data.chat_id,
	    		user_id : data.user_id
	    	};

	        arr.push(contact);
	    }

	    //Contact in list 
	    else 
	    {
	        arr[index] = {...arr[index], name: data.name};
	    }

	    setContacts(arr);

	}

	const mySubscriber = (msg, data) => {

	    switch (msg) {

	        case CONTACT_UPDATED_TOPIC:
	            updateContacts(data);
	            break;

	        case CONTACT_CREATED_TOPIC:
	            setContacts(data);
	            break;   

	        default:
	            break;
	    }

	};

	//Fetch contacts
	useEffect(()=>{
		
		getContacts(myID)
			.then(setContacts);

	},[myID]);

	//Subscribe to contact changes
	useEffect(() => {
    	PubSub.subscribe(CONTACT_UPDATED_TOPIC, mySubscriber);
    	PubSub.subscribe(CONTACT_CREATED_TOPIC, mySubscriber);

    	// return function cleanup() {
    	// 	PubSub.clearAllSubscriptions();
    	// }
	});

	return [contacts];

}	