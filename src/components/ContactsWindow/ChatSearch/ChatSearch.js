import React, {useState} from 'react';
import './ChatSearch.css';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const ChatSearch = () => {

	const [searchField, setSearchField] = useState('');

	const {setChatSearchField} = useAction();

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
		setChatSearchField(event.target.value);
	}

	let visible = useSelector(state => state.chatSearchBarVisible);
	let className = visible ? 'chatSearch app-theme-color-light' : 'chatSearch hidden app-theme-color-light';
	return (
		<div className = {className} >
		<input onChange = {onSearchChange} value = {searchField} placeholder = 'Search your chats' className = 'searchBar br-pill bn ph3' type = 'text' />
		</div>
	);
}

export default ChatSearch;