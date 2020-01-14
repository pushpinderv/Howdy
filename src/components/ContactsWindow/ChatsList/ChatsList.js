import React from 'react';
import ChatCard from './ChatCard/ChatCard';

const ChatList = () => {
	return (
		<nav style = {{ backgroundColor : 'lightblue', flex : 1, overflowY : 'scroll'}}>
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		<ChatCard />
		</nav>
	);
}

export default ChatList;