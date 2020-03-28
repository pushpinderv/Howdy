import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import ChatCard from './ChatCard/ChatCard';
import './ChatList.css';

const ChatList = () => {

	let myID = useSelector(state => state.myID);

	const [chats, setChats] = useState([]);

	useEffect(()=>{
		//Consider Axios as well
		fetch(`http://localhost:3001/${myID}/chats`)
		.then(response => response.json())
		.then(response => {setChats(response)})
	},[myID]);
	
	// let chats = [
	// 	{name :'Clark Kent', email : 'clark@gmail.com', message : 'It is not an S',  time_stamp : '2020-03-22 06:30:30+00', photo_url : ''}, 
	// 	{name :'Cain', email : 'cain@gmail.com',  message : 'God loves Abel more. Makes me wanna kill my brother.',  time_stamp : '2020-02-01 06:30:30+00', photo_url : ''}, 
	// 	{name :'David', email : 'david@gmail.com',  message : 'I killed Goliath!',  time_stamp : '2020-03-20 09:50:30+00', photo_url : ''},
	// 	{name :'Clark Kent', email : 'clark1@gmail.com', message : 'It is not an S',  time_stamp : '2020-03-22 06:30:30+00', photo_url : ''}, 
	// 	{name :'Cain', email : 'cain1@gmail.com',  message : 'God loves Abel more. Makes me wanna kill my brother.',  time_stamp : '2020-02-01 06:30:30+00', photo_url : ''}, 
	// 	{name :'David', email : 'david1@gmail.com',  message : 'I killed Goliath!',  time_stamp : '2020-03-20 09:50:30+00', photo_url : ''},
	// 	{name :'Clark Kent', email : 'clark2@gmail.com', message : 'It is not an S',  time_stamp : '2020-03-22 06:30:30+00', photo_url : ''}, 
	// 	{name :'Cain', email : 'cain2@gmail.com',  message : 'God loves Abel more. Makes me wanna kill my brother.',  time_stamp : '2020-02-01 06:30:30+00', photo_url : ''}, 
	// 	{name :'David', email : 'david2@gmail.com',  message : 'I killed Goliath!',  time_stamp : '2020-03-20 09:50:30+00', photo_url : ''}
	// ];

	let chatCards = chats.map(c => {
		let name = c.name;
		if(name === '') name = c.email;
		return <ChatCard key = {c.email} name = {name} message = {c.message} timeStamp = {c.time_stamp} chatID = {c.chat_id} />
	});

	let NoChatsMessage = () => {
		if(chats.length === 0) 
			return <div className = 'no-chats-div'>Click the "+" icon above to start chatting!</div>;
		return null;
	}

	let className = (chats.length === 0) ? 'chat-list no-chats' : 'chat-list';

	return (
		<div className = {className}>
		{chatCards}
		<NoChatsMessage />
		</div>
	);
}

export default ChatList;