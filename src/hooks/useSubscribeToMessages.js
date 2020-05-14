import { useState, useEffect } from 'react';
import {BASE_URL} from 'Redux/constants';
import {useSelector} from 'react-redux';
import moment from 'moment';
import lodash from 'lodash';
import axios from 'axios';

const addTimeSectionsToMessages = (messages) => {

	const header = item => {

		// Date ..
		// Today (if date > start of Today)
		// Yesterday (if date > start of Yesterday and date < startofToday)
		// Day of Week (if date < startOfYesterday and > startOfWeek)
		// Day of week, Apr 16 (if date < startOfWeek and > startOfYear)
		// Else Aug 16, 2019

		const date = moment(item.created_at).format('x');

		const startOfToday = moment().startOf('day');
		const startOfYesterday = moment().startOf('day').subtract(1, 'days');
		const startOfWeek = moment().startOf('week');
		const startOfYear = moment().startOf('year');

		if(date > startOfToday) return 'Today';
		else if((date < startOfToday) && (date > startOfYesterday)) return 'Yesterday';
		else if((date < startOfYesterday) && (date > startOfWeek)) return moment(item.created_at).format('dddd');
		else if((date < startOfWeek) && (date > startOfYear)) return moment(item.created_at).format('ddd, MMM DD');
		else return moment(item.created_at).format('MMM DD, YYYY');

	};

	const groupedData = lodash.groupBy(messages, header);

	// const result = Object.keys(groupedData).map(data => {
	// 	return [{id : lodash.uniqueId('info_'), info : true, content : data}].concat(groupedData[data]);
	// }).flat();

	// console.log(result);

	return groupedData;

}

export const useSubscribeToMessages = () => {

	let myID = useSelector(state => state.myID);
	let chatID = useSelector(state => state.chatID);
	let socket = useSelector(state => state.socket);

	console.log('Chat ID now changed to :', chatID);

	const [messages, setMessages] = useState([]);

	useEffect(()=>{

		const handleMessage = (message) => {

			if(Number(message.chat_id) === Number(chatID))
			{

			console.log(`Updating unread for ${chatID}`);	
				
			//Update messages read at on every message received
			axios.post(`${BASE_URL}/${myID}/chats/${chatID}/read-messages`,{});

			setMessages(messages => {

					//Check if messages do not contain today tag, and message in that header. Else make a new today header
					let updatedMessages = {...messages};
					
					if('Today' in updatedMessages) 
						{
							updatedMessages['Today'] = updatedMessages['Today'].concat(message);
						}
					else
						{
							updatedMessages['Today'] = [message];
						}
					return updatedMessages;
				})
			}
		};

		//Logging
		console.log('Use effect:', myID , chatID);

		//Consider Axios as well
		if(chatID && socket && myID)
		{
			
		fetch(`${BASE_URL}/${myID}/chats/${chatID}/messages`)
		.then(response => response.json())
		.then(response => {
			
			response.reverse();
			let groupedMessages = addTimeSectionsToMessages(response);
			setMessages(groupedMessages);

			//Listen for realtime messages
			socket.on('chat-message', handleMessage);
			console.log('useSubscribeToMessages', 'Message socket on...')

		})

		return function cleanup() {
      		//Socket Listen Cleanup
			socket.off('chat-message', handleMessage);
			console.log('useSubscribeToMessages', 'Message socket off...');
			setMessages([]);
    	};
    	
		}
		else 
		{
			setMessages([]);
		}

		

	},[myID, chatID, socket]);

	return [messages];

}