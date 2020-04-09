import { useState, useEffect } from 'react';
import {BASE_URL} from 'Redux/constants';

export const useSubscribeToMessages = (myID, chatID, socket) => {

	const [messages, setMessages] = useState([]);

	useEffect(()=>{

		//Consider Axios as well
		if(chatID && socket && myID)
		{
		fetch(`${BASE_URL}/${myID}/chats/${chatID}/messages`)
		.then(response => response.json())
		.then(response => {
			response.reverse();
			setMessages(response);

			//Listen for realtime messages
			socket.on('chat-message', (message) => {	
				setMessages(messages => {
					let updatedMessages = [...messages];
					updatedMessages.push(message)
					return updatedMessages;
				})
			});

		})
		}
		else 
		{
			setMessages([]);
		}

	},[myID, chatID, socket]);

	return [messages];

}