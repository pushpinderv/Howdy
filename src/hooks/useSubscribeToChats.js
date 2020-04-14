import {BASE_URL} from 'Redux/constants';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

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
    		chat_id : message.chat_id
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

	const [chats, setChats] = useState([]);

  let myID = useSelector(state => state.myID);

  let socket = useSelector(state => state.socket);

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

	return [chats];

}	