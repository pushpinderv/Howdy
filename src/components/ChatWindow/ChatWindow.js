import React from 'react';
import ContactDetailBar from '../ContactDetailBar/ContactDetailBar';
import SendMessageBar from '../SendMessageBar/SendMessageBar';
import ContactConversationList from '../ContactConversationList/ContactConversationList';
import {useMediaPredicate} from 'react-media-hook';

const ChatWindow = (props) => {
	const isMaxed = useMediaPredicate('(min-width: 900px)');
	var flexWidth = isMaxed ? '65%' : '60%';
	
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