import React from 'react';

const ContactProfilePicture = (props) => {
	return (
		<nav onClick = {props.onClick} className = 'br2' style = {{ 
			backgroundColor : 'lightblue', 
			height : '3em', 
			width : '3em', 
			margin : 'auto 0 auto 1em', 
			alignSelf : 'flex-start', cursor : 'pointer',
			flex : '0 0 auto'
		}}>
		</nav>
	);
}

export default ContactProfilePicture;