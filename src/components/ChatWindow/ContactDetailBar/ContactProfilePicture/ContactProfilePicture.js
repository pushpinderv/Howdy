import React from 'react';
import 'components/Common/UserIcon/UserIcon.css';

const ContactProfilePicture = (props) => {
	return (
		<nav onClick = {props.onClick} className = 'br2' style = {{ 
			backgroundColor : '#dfe5e7', 
			height : '3em', 
			width : '3em', 
			margin : 'auto 0 auto 1em', 
			alignSelf : 'flex-start', 
			cursor : 'pointer',
			flex : '0 0 auto',
			display : 'flex',
			flexDirection : 'column',
			overflow : 'hidden',
			position : 'relative'
		}}>
		<div className = 'userHead' />
		<div className = 'userBody' />
		<div className = 'bottomLine' />
		</nav>
	);
}

export default ContactProfilePicture;