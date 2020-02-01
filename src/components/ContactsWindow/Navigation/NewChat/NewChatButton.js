import React from 'react';

const NewChatButton = (props) => {
	return (
		<button onClick = {props.onClick} style = {{
			display: 'flex', 
			background : 'none', 
			// backgroundColor : 'yellow', 
			border : 'none', 
			outline : 'none', 
			width : '2.2em', 
			height : 'auto', 
			cursor : 'pointer', 
			marginRight : '0.5em',
			padding : '0.3em 0em'
		}}>
		<svg  className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path className = 'svg-path-default' d="M416 
		277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" 
		strokeWidth = '1px'/>
		</svg>
		</button>
	);
}

export default NewChatButton;