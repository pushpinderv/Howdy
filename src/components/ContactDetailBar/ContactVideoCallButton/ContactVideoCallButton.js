import React from 'react';
import videoCallButton from './_ionicons_svg_ios-videocam.svg';

const ContactVideoCallButton = () => {
	return (
		<button style = {{display: 'flex', background : 'none', backgroundColor : 'yellow', border : 'none', 
		outline : 'none', width : '3em', height : 'auto', 
		cursor : 'pointer', marginLeft : '1em', marginRight : '10px', flex : '0 0 auto'}}>
		<img src = {videoCallButton} alt = 'Video Call' />
		</button>
	);
}

export default ContactVideoCallButton;