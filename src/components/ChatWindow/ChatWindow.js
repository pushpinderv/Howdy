import React, {useState} from 'react';
import ContactDetailBar from './ContactDetailBar/ContactDetailBar';
import SendMessageBar from './SendMessageBar/SendMessageBar';
import ContactConversationList from './ContactConversationList/ContactConversationList';
import {useMediaPredicate} from 'react-media-hook';
import {ContactProfileDrawerContext} from 'Store';
import ContactProfileDrawer from './ContactProfileDrawer/ContactProfileDrawer';

const ChatWindow = (props) => {
	const isMaxed = useMediaPredicate('(min-width: 900px)');
	var flexWidth = isMaxed ? '65%' : '60%';
	const [contactProfileDrawerOpen, setContactProfileDrawerOpen] = useState(false);

	if(props.mode === 'Mobile')
	{
		flexWidth = '100%'
	}	
	return (
		<nav style = {
			{display : 'flex', backgroundColor : 'red', flex : flexWidth, 
			flexDirection : 'column', maxWidth : flexWidth, position : 'relative', overflow : 'hidden'}
		}>
		<ContactProfileDrawerContext.Provider value = {[contactProfileDrawerOpen, setContactProfileDrawerOpen]}>
		<ContactProfileDrawer />
		<ContactDetailBar />
		<ContactConversationList />
		<SendMessageBar />
		</ContactProfileDrawerContext.Provider>
		</nav>
	);
}

export default ChatWindow;