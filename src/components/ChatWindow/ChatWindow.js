import React, {useState} from 'react';
import ContactDetailBar from './ContactDetailBar/ContactDetailBar';
import SendMessageBar from './SendMessageBar/SendMessageBar';
import ContactConversationList from './ContactConversationList/ContactConversationList';
import {useMediaPredicate} from 'react-media-hook';
import {ContactProfileDrawerContext} from 'Store';
import ContactProfileDrawer from './ContactProfileDrawer/ContactProfileDrawer';
import './ChatWindow.css';
import {useSelector} from 'react-redux';

const ChatWindow = (props) => {

	const selected = useSelector(state => state.chatSelected);

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
			<ContactProfileDrawer lastOnline = {useSelector(state => state.chatUserLastOnline)} photo_url = {useSelector(state => state.chatUserPhotoUrl)} />
			<ContactDetailBar name = {useSelector(state => state.chatUserName)} lastOnline = {useSelector(state => state.chatUserLastOnline)} photo_url = {useSelector(state => state.chatUserPhotoUrl)}/>
			<ContactConversationList />
			<SendMessageBar />
			</ContactProfileDrawerContext.Provider>;

	if(props.mode === 'Desktop' && !selected)		
		
		windowContents = <div className = 'ChatWindow app-theme-color' style = {
	 		{flex : '1', maxWidth : '100%'}
			} />;


	return (
		<div className = {className} style = {
			{flex : flexWidth, maxWidth : flexWidth}
		}>
		{windowContents}
		</div>
	);


	// return (<div className = 'ChatWindow unselected' style = {
	// 		{flex : flexWidth, maxWidth : flexWidth}
	// 	} >Welp</div>);
}

export default ChatWindow;