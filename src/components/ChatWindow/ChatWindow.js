import React from 'react';
import ContactDetailBar from '../ContactDetailBar/ContactDetailBar';
import SendMessageBar from '../SendMessageBar/SendMessageBar';
import ContactConversationList from '../ContactConversationList/ContactConversationList';

const ChatWindow = () => {
	return (
		<nav style = {
			{display : 'flex', backgroundColor : 'red', flex : 0.70, flexDirection : 'column', maxWidth : '70%'}
		}>
		<ContactDetailBar />
		<ContactConversationList />
		<SendMessageBar />
		</nav>
	);
}

export default ChatWindow;