import {BASE_URL, CONTACT_UPDATED_TOPIC, HAS_UNREAD_MESSAGES_TOPIC} from 'Redux/constants';
import { useState, useEffect, useCallback } from 'react';
import {useSelector} from 'react-redux';
import PubSub from 'pubsub-js';
import useAction from 'Redux/actions/useAction';

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

const pushToArray = (arr, message, chatID) => {
    const index = arr.findIndex((e) => Number(e.chat_id) === Number(message.chat_id));

    if (index === -1) 
    {

    	let chat = {
    		email : message.email,
    		message : message.content,
    		time_stamp : message.created_at,
    		name : message.name,
    		chat_id : message.chat_id,
            other_participant_id : message.other_participant_id	
      };

      arr.push(chat);
    } 
    else 
    {
        arr[index] = {...arr[index], time_stamp: message.created_at, message : message.content};
    }

    arr.sort(compareValues('time_stamp', 'desc'));

    return arr;
}

const reflectContactUpdate = (arr, data, chatUserEmail, setChatUserName) => {

    //Update global state username if useremail is same
    if(chatUserEmail === data.email)
        setChatUserName(data.name);

    const index = arr.findIndex((e) => e.email === data.email);

    //Contact in chat list
    if (index !== -1) 
    {
        arr[index] = {...arr[index], name: data.name};
    }

    return arr;

}

export const useSubscribeToChats = () => {

    const [chats, setChats] = useState([]);

    let myID = useSelector(state => state.myID);

    let socket = useSelector(state => state.socket);

    let chatUserEmail = useSelector(state => state.chatUserEmail);

    let chatID = useSelector(state => state.chatID);

    const {setChatUserName} = useAction();

    const handleMessage = useCallback((message) => {
        console.log('useSubscribeToChats :', message);
        setChats(chats => pushToArray([...chats], message))
        console.log(message.chat_id, chatID);
        if(Number(message.chat_id) !== Number(chatID)) 
        {
            console.log('Pubsubbing!');
            PubSub.publish(HAS_UNREAD_MESSAGES_TOPIC, {chatID : message.chat_id})
        }
    }, [chatID]);

    const mySubscriber = useCallback((msg, data) => {

        switch (msg) {

            //Handling contact creation as a contact update as well
            case CONTACT_UPDATED_TOPIC:
                setChats(chats => reflectContactUpdate([...chats], data, chatUserEmail, setChatUserName));
                break;

            //Handle unread/read state as well

            default:
                break;
        }

    }, [chatUserEmail, setChatUserName]); 

	//Fetch Chats
	useEffect(()=>{

        let pubsubToken;

		if(myID && socket)
		{

		//Fetch chats from server
		fetch(`${BASE_URL}/${myID}/chats`)
    		.then(response => response.json())
    		.then(response => {
    			
    			setChats(response)

    			//Listen for realtime messages
    			socket.on('chat-message', handleMessage);
                console.log('useSubscribeToChats', 'Listening for chats ...');

                //Listen for contact updates    
                pubsubToken = PubSub.subscribe(CONTACT_UPDATED_TOPIC, mySubscriber);
    	});

        return function cleanup() {

            //Socket Cleanup
            socket.off('chat-message', handleMessage); 
            console.log('useSubscribeToChats', 'Stopped listening for chats ...');

            //Cancel Pubsub subscription
            PubSub.unsubscribe(pubsubToken);
        };

    	}    

		else 
        {
			setChats([]);
		}

	},[myID, socket, mySubscriber, handleMessage]);

	return [chats];

}	