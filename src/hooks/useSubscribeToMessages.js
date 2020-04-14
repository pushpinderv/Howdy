import { useState, useEffect } from 'react';
import {BASE_URL} from 'Redux/constants';
import {useSelector} from 'react-redux';

export const useSubscribeToMessages = () => {

	let myID = useSelector(state => state.myID);
	let chatID = useSelector(state => state.chatID);
	let socket = useSelector(state => state.socket);

	console.log('Chat ID now changed to :', chatID);

	const [messages, setMessages] = useState([]);

	const handleMessage = (message) => {	
				setMessages(messages => {
					let updatedMessages = [...messages];
					updatedMessages.push(message)
					return updatedMessages;
				})
			};

	useEffect(()=>{

		//Logging
		console.log('Use effect:', myID , chatID);

		//Consider Axios as well
		if(chatID && socket && myID)
		{
			
		fetch(`${BASE_URL}/${myID}/chats/${chatID}/messages`)
		.then(response => response.json())
		.then(response => {
			response.reverse();
			setMessages(response);

			//Listen for realtime messages
			socket.on('chat-message', handleMessage);
			console.log('useSubscribeToMessages', 'Message socket on...')

		})

		return function cleanup() {
      		//Socket Listen Cleanup
			socket.off('chat-message', handleMessage);
			console.log('useSubscribeToMessages', 'Message socket off...')
    	};
    	
		}
		else 
		{
			setMessages([]);
		}

		

	},[myID, chatID, socket]);

	return [messages];

}