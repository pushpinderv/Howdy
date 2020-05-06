import {BASE_URL, CONTACT_UPDATED_TOPIC} from 'Redux/constants';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import PubSub from 'pubsub-js';

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

function pushToArray(arr, message) {
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

export const useSubscribeToChats = () => {

  const mySubscriber = (msg, data) => {

    switch (msg) {

        case CONTACT_UPDATED_TOPIC:
            updateChats(data);
            break;

        default:
            break;
    }

  };


	const [chats, setChats] = useState([]);

  let myID = useSelector(state => state.myID);

  let socket = useSelector(state => state.socket);

  const updateChats = (data) => {

    let arr = [...chats];

    const index = arr.findIndex((e) => e.email === data.email);

    //Contact in chat list
    if (index !== -1) 
 
      arr[index] = {...arr[index], name: data.name};
      setChats(arr);

  }

  const handleMessage = (message) => {
        console.log('useSubscribeToChats :', message);
        setChats(chats => {
          
          // let updatedChats = [...chats].map(el => Number(el.chat_id) === Number(message.chat_id) ? {...el, time_stamp: message.created_at, message : message.content} : el);

          let updatedChats = pushToArray([...chats], message);

          return updatedChats;
        })
      };

	//Fetch Chats
	useEffect(()=>{

		if(myID && socket)
		{	

    //Socket Cleanup
    socket.off('chat-message', handleMessage); 

    console.log('useSubscribeToChats', 'Stopped listening for chats ...');

    
		//Consider Axios as well
		fetch(`${BASE_URL}/${myID}/chats`)
		.then(response => response.json())
		.then(response => {
			
			setChats(response)

			//Listen for realtime messages
			socket.on('chat-message', handleMessage);

      console.log('useSubscribeToChats', 'Listening for chats ...');

		})
		}

		else {
			setChats([]);
		}

	},[myID, socket]);

  //Subscribe to contact changes
  useEffect(() => {
      PubSub.subscribe(CONTACT_UPDATED_TOPIC, mySubscriber);

      // return function cleanup() {
      //   PubSub.clearAllSubscriptions();
      // }
  });

	return [chats];

}	