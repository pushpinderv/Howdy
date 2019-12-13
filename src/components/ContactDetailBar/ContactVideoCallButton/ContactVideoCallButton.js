import React from 'react';
import videoCallButton from './_ionicons_svg_ios-videocam.svg';

const ContactVideoCallButton = () => {
	return (
		<button style = {{display: 'flex', background : 'none', backgroundColor : 'yellow', border : 'none', 
		outline : 'none', width : '45px', height : 'auto', 
		cursor : 'pointer', marginLeft : '30px', marginRight : '10px', flex : '0 0 auto'}}>
		<img src = {videoCallButton} />
		</button>
	);
}

export default ContactVideoCallButton;