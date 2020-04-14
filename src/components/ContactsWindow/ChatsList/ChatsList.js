import React from 'react';
import ChatCard from './ChatCard/ChatCard';
import './ChatList.css';
import {useSubscribeToChats} from 'hooks/useSubscribeToChats';

const ChatList = () => {

	const [chats] = useSubscribeToChats();

	let chatCards = [];
	if(chats)
	chatCards = chats.map(c => {
		let name = c.name;
		if(name === ''|| name === null) name = c.email;
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