import React from 'react';
import './ChatSearch.css';
import {useSelector} from 'react-redux';

const ChatSearch = () => {
	let visible = useSelector(state => state.chatSearchBarVisible);
	let className = visible ? 'chatSearch app-theme-color-light' : 'chatSearch hidden app-theme-color-light';
	return (
		<div className = {className} >
		<input placeholder = 'Search your chats' className = 'searchBar br-pill bn ph3' type = 'text' />
		</div>
	);
}

export default ChatSearch;