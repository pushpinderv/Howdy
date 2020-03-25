import React from 'react';

const ContactLastOnline = (props) => {
	return (
		<nav className = 'clipped' style = {{
			// backgroundColor : 'yellow',
			// marginTop : '4px',
			fontSize : '0.85em',
			lineHeight : '1.5em',
			fontWeight : '330',
			color : 'white'
		}}>
		{props.lastOnline}
		</nav>
	);
}

export default ContactLastOnline;