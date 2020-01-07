import React from 'react';
import sendButtonImage from './_ionicons_svg_md-send.svg';

const SendMessageBar = () => {
	return (

		<nav style = {{
			display : 'flex', 
			padding : '0.7em', 
			backgroundColor : 'purple', 
			flex : '0 0 auto', 
			height : '4.25em',
			overflow : 'hidden'
		}}>

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
			marginLeft : '0.9em', 
			cursor : 'pointer' , 
			display: 'flex', 
			background : 'none',
			backgroundColor : 'yellow', 
			border : 'none', 
		    outline : 'none',
            width : '2.65em', 
		    height : 'auto',
		    padding : '0.3em',
		    flex : '0 0 auto',
		    justifyContent : 'center'
		}}>
		<img src = {sendButtonImage} alt = 'Send Message' />
		</button>

		</nav>
	);
}

export default SendMessageBar;