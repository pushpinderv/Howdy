import React from 'react';

const ContactName = (props) => {
	return (
		<nav className = 'clipped' style = {{
			// backgroundColor : 'green' , 
			// marginBottom : '4px',
			color : 'white',
			fontSize : '1.1em',
			lineHeight : '1.6em',
			fontWeight : '340'		
		}}>
		{props.name}
		</nav>
	);
}

export default ContactName;