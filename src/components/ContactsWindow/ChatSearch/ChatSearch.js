import React from 'react';
import './ChatSearch.css';

const ChatSearch = () => {
	return (
		<div className = 'chatSearch app-theme-color-light' >
		<input placeholder = 'Search your chats' className = 'searchBar br-pill bn ph3' type = 'text' />
		</div>
	);
}

export default ChatSearch;