import React, {useState, useContext} from 'react';
import ContactDetailBar from './ContactDetailBar/ContactDetailBar';
import SendMessageBar from './SendMessageBar/SendMessageBar';
import ContactConversationList from './ContactConversationList/ContactConversationList';
import {useMediaPredicate} from 'react-media-hook';
import {ContactProfileDrawerContext} from 'Store';
import ContactProfileDrawer from './ContactProfileDrawer/ContactProfileDrawer';
import './ChatWindow.css';
import {ChatDrawerContext} from 'Store';

const ChatWindow = (props) => {

	const isMaxed = useMediaPredicate('(min-width: 900px)');
	let flexWidth = isMaxed ? '65%' : '60%';
	const [contactProfileDrawerOpen, setContactProfileDrawerOpen] = useState(false);
	let className = 'ChatWindow';

	const [chatDrawerOpen, ] = useContext(ChatDrawerContext);
	console.log('Oiiii my chatDrawer is '+ chatDrawerOpen);

	if(props.mode === 'Mobile')
	{
		flexWidth = '100%'
		className = chatDrawerOpen ? 'ChatWindow drawer open' : 'ChatWindow drawer';
		console.log('Oiiii my classname is '+ className);
	}	
	return (
		<div className = {className} style = {
			{display : 'flex', backgroundColor : 'red', flex : flexWidth, 
			flexDirection : 'column', maxWidth : flexWidth, overflow : 'hidden'}
		}>
		<ContactProfileDrawerContext.Provider value = {[contactProfileDrawerOpen, setContactProfileDrawerOpen]}>
		<ContactProfileDrawer />
		<ContactDetailBar />
		<ContactConversationList />
		<SendMessageBar />
		</ContactProfileDrawerContext.Provider>
		</div>
	);
}

export default ChatWindow;