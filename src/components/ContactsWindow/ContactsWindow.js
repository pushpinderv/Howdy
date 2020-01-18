import React from 'react';
import Navigation from './Navigation/Navigation';
import ChatSearch from './ChatSearch/ChatSearch';
import ChatsList from './ChatsList/ChatsList';
import {useMediaPredicate} from 'react-media-hook';
import ProfileDrawer from './Navigation/Profile/ProfileDrawer/ProfileDrawer';

const ContactsWindow = () => {
	const isMaxed = useMediaPredicate('(min-width: 900px)');
	var flexWidth = isMaxed ? '35%' : '40%';

	// const [profileDrawerOpen,] = useContext(ProfileDrawerContext);
	// let profileDrawer;
	// if(profileDrawerOpen)
	// {
	// 	profileDrawer = <ProfileDrawer />;
	// }

	return (
		<nav style = {
			{display : 'flex' , backgroundColor : 'green', flex : flexWidth, 
			flexDirection : 'column', maxWidth : flexWidth, position : 'relative'}
	    }
		>
		<ProfileDrawer />
		<Navigation />
		<ChatSearch />
		<ChatsList />
		</nav>
	);
}

export default ContactsWindow;