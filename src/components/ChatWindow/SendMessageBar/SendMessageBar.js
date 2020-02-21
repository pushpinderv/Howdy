import React from 'react';
import './SendMessageBar.css';

const SendMessageBar = () => {
	return (

		<div className = 'app-theme-color sendMessageBar'>
		<input placeholder = 'Type a message' className = 'br-pill bn ph3' 
		style = {{
			flex : '1 1 auto', 
			minWidth : '0px', 
			outline : 'none',
			fontSize : '1em',
			lineHeight : '1.4em'
		}} 
		type = 'text' />

		<button style = {{ 
			marginLeft : '0.6em', 
			cursor : 'pointer' , 
			display: 'flex', 
			background : 'none',
			// backgroundColor : 'yellow', 
			border : 'none', 
		    outline : 'none',
            width : '2.9em', 
		    height : 'auto',
		    padding : '0.3em',
		    flex : '0 0 auto',
		    justifyContent : 'center'
		}}>
		<svg className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path className = 'svg-path-default' d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/></svg>
		</button>

		</div>
	);
}

export default SendMessageBar;