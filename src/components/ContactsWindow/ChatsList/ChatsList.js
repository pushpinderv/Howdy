import React from 'react';
import ChatCard from './ChatCard/ChatCard';

const ChatList = () => {
	return (
		<nav style = {{ backgroundColor : 'white', flex : 1, overflowY : 'scroll', paddingTop : '0.2em'}}>
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