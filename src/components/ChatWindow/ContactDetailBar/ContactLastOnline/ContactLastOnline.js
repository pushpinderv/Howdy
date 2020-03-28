import React from 'react';
import moment from 'moment';

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
		{moment(props.lastOnline).format('DD/MM/YYYY')}
		</nav>
	);
}

export default ContactLastOnline;