import React from 'react';
import ContactDetailBar from '../ContactDetailBar/ContactDetailBar';
import SendMessageBar from '../SendMessageBar/SendMessageBar';
import ContactConversationList from '../ContactConversationList/ContactConversationList';

const ChatWindow = (props) => {
	// console.log('ChatWindow', props.mode);
	var flexWidth = '70%';
	if(props.mode === 'Mobile')
	{
		flexWidth = '100%'
	}	
	return (
		<nav style = {
			{display : 'flex', backgroundColor : 'red', flex : flexWidth, 
			flexDirection : 'column', maxWidth : flexWidth}
		}>
		<ContactDetailBar />
		<ContactConversationList />
		<SendMessageBar />
		</nav>
	);
}

export default ChatWindow;