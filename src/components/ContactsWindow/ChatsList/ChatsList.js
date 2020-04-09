import React from 'react';
import {useSelector} from 'react-redux';
import ChatCard from './ChatCard/ChatCard';
import './ChatList.css';
import {useSubscribeToChats} from 'hooks/useSubscribeToChats';

const ChatList = () => {

	let myID = useSelector(state => state.myID);

	let socket = useSelector(state => state.socket);

	const [chats] = useSubscribeToChats(myID, socket);

	let chatCards = [];
	if(chats)
	chatCards = chats.map(c => {
		let name = c.name;
		if(name === '') name = c.email;
		return <ChatCard key = {c.email} name = {name} message = {c.message} timeStamp = {c.time_stamp} chatID = {c.chat_id} />
	});

	let NoChatsMessage = () => {
		if(chats.length === 0) 
			return <div className = 'no-chats-div'>Click the "+" icon above to start chatting!</div>;
		return null;
	}

	let className = (chats) ? 'chat-list' : 'chat-list no-chats';

	return (
		<div className = {className}>
		{chatCards}
		<NoChatsMessage />
		</div>
	);
}

export default ChatList;