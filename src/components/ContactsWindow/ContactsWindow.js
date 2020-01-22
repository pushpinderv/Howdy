import React, {useState, useContext} from 'react';
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
import {ChatSelectedContext} from 'Store';
import {ModeContext} from 'Store';

const ContactsWindow = () => {

	const [chatSelected,] = useContext(ChatSelectedContext);
	const [mode,] = useContext(ModeContext);

	const isMaxed = useMediaPredicate('(min-width: 900px)');
	var flexWidth = isMaxed ? '35%' : '40%';

	if((!chatSelected)&&(mode === 'Mobile'))
		flexWidth = '100%';

	const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
	const [newChatDrawerOpen, setNewChatDrawerOpen] = useState(false);
	const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

	return (
		<nav style = {
			{display : 'flex' , backgroundColor : 'green', flex : flexWidth, 
			flexDirection : 'column', maxWidth : flexWidth, position : 'relative', overflow : 'hidden'}
	    }
		>
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
		</nav>
	);
}

export default ContactsWindow;