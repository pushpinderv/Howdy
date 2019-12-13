import React from 'react';
import sendButtonImage from './_ionicons_svg_md-send.svg';

const SendMessageBar = () => {
	return (
		<nav style = {{display : 'flex', padding : '10px', backgroundColor : 'purple', flex : '0 0 auto', height : '60px'}}>
		<input placeHolder = 'Type a message' className = 'br-pill bn ph3' style = {{flex : 1, outline : 'none', lineHeight : 1}} type = 'text' />
		<button style = {{ 
			marginLeft : '13px', 
			cursor : 'pointer' , 
			display: 'flex', 
			background : 'none',
			backgroundColor : 'yellow', 
			border : 'none', 
		    outline : 'none', 
		    width : '40px', 
		    height : 'auto'}}>
		<img src = {sendButtonImage} />
		</button>
		</nav>
	);
}

export default SendMessageBar;