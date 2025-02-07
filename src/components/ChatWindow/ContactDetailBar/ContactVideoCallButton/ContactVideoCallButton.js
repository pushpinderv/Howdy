import React from 'react';
// import videoCallButton from './_ionicons_svg_ios-videocam.svg';

const ContactVideoCallButton = () => {
	return (
		<button style = {{display: 'flex', background : 'none', 
		// backgroundColor : 'yellow', 
		border : 'none', 
		outline : 'none', width : '3em', height : 'auto',
		padding : '0.3em', 
		cursor : 'pointer', marginLeft : '0.3em', marginRight : '0.4em', flex : '0 0 auto',
		justifyContent : 'center'}}>
		<svg className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path className = 'svg-path-default' d="M450.6 153.6c-3.3 0-6.5.9-9.3 2.7l-86.5 54.6c-2.5 1.6-4 4.3-4 
		7.2v76c0 2.9 1.5 5.6 4 7.2l86.5 54.6c2.8 1.7 6 2.7 9.3 2.7h20.8c4.8 0 
		8.6-3.8 8.6-8.5v-188c0-4.7-3.9-8.5-8.6-8.5h-20.8zM273.5 384h-190C55.2 
		384 32 360.8 32 332.6V179.4c0-28.3 23.2-51.4 51.4-51.4h190c28.3 
		0 51.4 23.2 51.4 51.4v153.1c.1 28.3-23 51.5-51.3 51.5z"/></svg>
		</button>
	);
}

export default ContactVideoCallButton;