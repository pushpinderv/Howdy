import React from 'react';

const ChatSearch = () => {
	return (
		<div style = {{display : 'flex', padding : '10px', backgroundColor : 'blue', 
		flex : '0 0 auto', height : '55px'}}>
		<input placeholder = 'Search your chats' className = 'br-pill bn ph3' 
		style = {{flex : '1 1 auto', minWidth : '100%', outline : 'none', lineHeight : 1}} type = 'text' />
		</div>
	);
}

export default ChatSearch;