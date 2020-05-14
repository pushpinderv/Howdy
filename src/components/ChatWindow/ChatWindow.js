import React, {useState} from 'react';
import ContactDetailBar from './ContactDetailBar/ContactDetailBar';
import SendMessageBar from './SendMessageBar/SendMessageBar';
import ContactConversationList from './ContactConversationList/ContactConversationList';
import {useMediaPredicate} from 'react-media-hook';
import {ContactProfileDrawerContext} from 'Store';
import ContactProfileDrawer from './ContactProfileDrawer/ContactProfileDrawer';
import './ChatWindow.css';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const ChatWindow = (props) => {

	const selected = useSelector(state => state.chatSelected);

	const {setChatID} = useAction();

	if(!selected)
	{
		setChatID(null);
	}


	const isMaxed = useMediaPredicate('(min-width: 900px)');
	let flexWidth = isMaxed ? '65%' : '60%';
	const [contactProfileDrawerOpen, setContactProfileDrawerOpen] = useState(false);
	
	let className = 'ChatWindow';

	console.log('Oiiii my chatDrawer is '+ selected);

	if(props.mode === 'Mobile')
	{
		flexWidth = '100%'
		className = selected ? 'ChatWindow drawer open' : 'ChatWindow drawer';
		console.log('Oiiii my classname is '+ className);
	}

	let windowContents;

		windowContents = <ContactProfileDrawerContext.Provider value = {[contactProfileDrawerOpen, setContactProfileDrawerOpen]}>
			<ContactProfileDrawer lastOnline = {useSelector(state => state.chatUserLastOnline)} user_id = {useSelector(state => state.chatUserID)} />
			<ContactDetailBar name = {useSelector(state => state.chatUserName)} lastOnline = {useSelector(state => state.chatUserLastOnline)} user_id = {useSelector(state => state.chatUserID)}/>
			<ContactConversationList />
			<SendMessageBar />
			</ContactProfileDrawerContext.Provider>;

	if(props.mode === 'Desktop' && !selected)		
		{
		let welcomeMessage = <div className = 'welcome-message'>Welcome to Howdy! Click on a chat and say Hi to your friends.</div>;	
		windowContents = <div className = 'ChatWindow app-theme-color' style = {
	 		{flex : '1', maxWidth : '100%', justifyContent : 'center'}}>{welcomeMessage}</div>;
	 	}


	return (
		<div className = {className} style = {
			{flex : flexWidth, maxWidth : flexWidth}
		}>
		{windowContents}
		</div>
	);



}

export default ChatWindow;