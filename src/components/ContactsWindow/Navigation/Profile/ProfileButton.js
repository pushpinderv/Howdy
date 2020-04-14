import React from 'react';
import UserIcon from 'components/Common/UserIcon/UserIcon';

const ProfileButton = (props) => {

	return (<UserIcon 
		onClick = {props.onClick} 
		height = '3em' width = '3em' 
		margin = 'auto 0 auto 1.25em'/>);
	
}

export default ProfileButton;