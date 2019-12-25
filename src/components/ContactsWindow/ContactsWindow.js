import React from 'react';
import Navigation from '../Navigation/Navigation';
import ChatSearch from '../ChatSearch/ChatSearch';
import ChatsList from '../ChatsList/ChatsList';

const ContactsWindow = () => {

	return (
		<nav style = {
			{display : 'flex' , backgroundColor : 'green', flex : 0.30, flexDirection : 'column', maxWidth : '30%'}
	    }
		>
		<Navigation />
		<ChatSearch />
		<ChatsList />
		</nav>
	);
}

export default ContactsWindow;