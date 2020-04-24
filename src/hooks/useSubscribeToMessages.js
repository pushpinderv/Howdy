import { useState, useEffect } from 'react';
import {BASE_URL} from 'Redux/constants';
import {useSelector} from 'react-redux';
import moment from 'moment';
import lodash from 'lodash';

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

	const result = Object.keys(groupedData).map(data => {
		return [{id : lodash.uniqueId('info_'), info : true, content : data}].concat(groupedData[data]);
	}).flat();

	console.log(result);

	return result;

}

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
			let messages = addTimeSectionsToMessages(response);
			setMessages(messages);

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