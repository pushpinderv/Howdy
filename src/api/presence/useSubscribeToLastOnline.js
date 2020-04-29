import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import {BASE_URL} from 'Redux/constants';

const getProcessedTimeStamp = (timestamp) => {

	if(!timestamp) return 'online';

	const date = moment(timestamp).format('x');
	const startOfToday = moment().startOf('day');
	const startOfYesterday = moment().startOf('day').subtract(1, 'days');
	const startOfWeek = moment().startOf('week');
	const startOfYear = moment().startOf('year');

		if(date > startOfToday) 
			return 'Last online today at ' + moment(timestamp).format('h:mm a');
		else if((date < startOfToday) && (date > startOfYesterday)) 
			return 'Last online yesterday at ' + moment(timestamp).format('h:mm a');
		else if((date < startOfYesterday) && (date > startOfWeek)) 
			return 'Last online on ' + moment(timestamp).format('dddd');
		else if((date < startOfWeek) && (date > startOfYear)) 
			return 'Last online on ' + moment(timestamp).format('ddd, MMM DD');
		else 
			return 'Last online on ' + moment(timestamp).format('MMM DD, YYYY');
}

export const useSubscribeToLastOnline = () =>{

	const [status, setStatus] = useState('');
	let socket = useSelector(state => state.socket);
	let chatUserID = useSelector(state => state.chatUserID);


	useEffect(() => {

		if(chatUserID)
		{
			//Fetch the timestamp from db (A null timestamp indicates user is online)
			axios.get(`${BASE_URL}/${chatUserID}/last-online`)
				.then(response => {
					setStatus(getProcessedTimeStamp(response.data))
				})
		}

		//Subscribe to realtime presence via socket
		const handleMessage = (message) => {
					console.log(`Last online updated for ${chatUserID}`);
					if(message.status) setStatus('online');
					else setStatus(getProcessedTimeStamp(message.last_online));
				}

		if(socket && chatUserID)
			{
				socket.emit("subscribe", { room: chatUserID });
				socket.on('client-online', handleMessage);
				
				return function cleanup() {
		      		//Socket Listen Cleanup
		      		socket.emit("unsubscribe", { room: chatUserID });
					socket.off('client-online', handleMessage);
    			};
			}	

	},[socket, chatUserID]);

	return [status];
}