import React from 'react';

const ChatSearch = () => {
	return (
		<div className = 'app-theme-color-light' style = {{
			display : 'flex', 
			padding : '0.6em 0.75em', 
			// backgroundColor : 'blue', 
			flex : '0 0 auto', 
			height : '3.7em'
		}}>
		<input placeholder = 'Search your chats' className = 'br-pill bn ph3' 
		style = {{
			flex : '1 1 auto', 
			minWidth : '100%', 
			outline : 'none',
			fontSize : '1em', 
			lineHeight : '1.4em'
		}} type = 'text' />
		</div>
	);
}

export default ChatSearch;