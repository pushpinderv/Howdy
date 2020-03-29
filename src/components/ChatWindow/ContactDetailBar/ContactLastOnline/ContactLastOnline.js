import React from 'react';
import moment from 'moment';

const formattedTime = (timestamp) => {
	if(timestamp !== null)
	return moment(timestamp).format('DD/MM/YYYY');
	return null;
}

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
		{formattedTime(props.lastOnline)}
		</nav>
	);
}

export default ContactLastOnline;