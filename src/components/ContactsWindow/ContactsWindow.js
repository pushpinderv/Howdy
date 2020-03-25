import React, {useState} from 'react';
import Navigation from './Navigation/Navigation';
import ChatSearch from './ChatSearch/ChatSearch';
import ChatsList from './ChatsList/ChatsList';
import {useMediaPredicate} from 'react-media-hook';
import ProfileDrawer from './Navigation/Profile/ProfileDrawer/ProfileDrawer';
import NewChatDrawer from './Navigation/NewChat/NewChatDrawer/NewChatDrawer';
import MenuDrawer from './Navigation/Menu/MenuDrawer/MenuDrawer';
import {ProfileDrawerContext} from 'Store';
import {NewChatDrawerContext} from 'Store';
import {MenuDrawerContext} from 'Store';
import ChatWindow from '../ChatWindow/ChatWindow';
import './ContactsWindow.css';

const ContactsWindow = (props) => {

	const isMaxed = useMediaPredicate('(min-width: 900px)');
	var flexWidth = isMaxed ? '35%' : '40%';
	
	let chatWindow;
	if(props.mode === 'Mobile')
	{
		console.log('ContactsWindow: Stretch to 100%!')
		flexWidth = '100%';
		chatWindow = <ChatWindow mode = {props.mode} />;
	}

	const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
	const [newChatDrawerOpen, setNewChatDrawerOpen] = useState(false);
	const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

	return (
		<div style = {{flex : flexWidth, maxWidth : flexWidth}} className = 'contactsWindow'>
		<ProfileDrawerContext.Provider value = {[profileDrawerOpen, setProfileDrawerOpen]}>
		<ProfileDrawer />

		<NewChatDrawerContext.Provider value = {[newChatDrawerOpen, setNewChatDrawerOpen]}>
		<NewChatDrawer />
		<MenuDrawerContext.Provider value = {[menuDrawerOpen, setMenuDrawerOpen]}>
		<MenuDrawer />
		<Navigation />
		</MenuDrawerContext.Provider>
		</NewChatDrawerContext.Provider>

		<ChatSearch />
		<ChatsList />
		
		</ProfileDrawerContext.Provider>
		{chatWindow}
		</div>
	);
}

export default ContactsWindow;