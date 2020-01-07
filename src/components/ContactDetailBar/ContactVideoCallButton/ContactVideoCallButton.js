import React from 'react';
import videoCallButton from './_ionicons_svg_ios-videocam.svg';

const ContactVideoCallButton = () => {
	return (
		<button style = {{display: 'flex', background : 'none', backgroundColor : 'yellow', border : 'none', 
		outline : 'none', width : '2.8em', height : 'auto',
		padding : '0.3em', 
		cursor : 'pointer', marginLeft : '1em', marginRight : '0.7em', flex : '0 0 auto',
		justifyContent : 'center'}}>
		<img src = {videoCallButton} alt = 'Video Call' />
		</button>
	);
}

export default ContactVideoCallButton;