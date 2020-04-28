import React from 'react';
import {useSubscribeToLastOnline} from 'api/presence/useSubscribeToLastOnline';

const ContactLastOnline = (props) => {
	return (
		<nav className = 'clipped' style = {{
			fontSize : '0.85em',
			lineHeight : '1.5em',
			fontWeight : '330',
			color : 'white'
		}}>
		{useSubscribeToLastOnline()}
		</nav>
	);
}

export default ContactLastOnline;