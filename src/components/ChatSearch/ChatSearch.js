import React from 'react';

const ChatSearch = () => {
	return (
		<nav style = {{display : 'flex', padding : '10px', backgroundColor : 'blue', 
		flex : '0 0 auto', height : '55px'}}>
		<input placeHolder = 'Search your chats' className = 'br-pill bn ph3' 
		style = {{flex : '1 1 auto', minWidth : '100%', outline : 'none', lineHeight : 1}} type = 'text' />
		</nav>
	);
}

export default ChatSearch;