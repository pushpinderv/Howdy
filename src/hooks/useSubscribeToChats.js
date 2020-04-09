import {BASE_URL} from 'Redux/constants';
import { useState, useEffect } from 'react';

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

export const useSubscribeToChats = (myID, socket) => {

	const [chats, setChats] = useState([]);

	//Fetch Chats
	useEffect(()=>{

		if(myID && socket)
		{	
		//Consider Axios as well
		fetch(`${BASE_URL}/${myID}/chats`)
		.then(response => response.json())
		.then(response => {
			
			setChats(response)

			//Listen for realtime messages
			socket.on('chat-message', (message) => {
				setChats(chats => {
					let updatedChats = [...chats].map(el => Number(el.chat_id) === Number(message.chat_id) ? {...el, time_stamp: message.created_at, message : message.content} : el);
					updatedChats.sort(compareValues('time_stamp', 'desc'));
					return updatedChats;
				})
			});

		})
		}

		else {
			setChats([]);
		}

	},[myID, socket]);

	return [chats];

}	