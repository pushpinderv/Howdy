import React from 'react';
import Menu from 'components/Common/Menu/Menu';
import MenuItem from 'components/Common/Menu/MenuItem/MenuItem';

const ProfilePicMenu = (props) => {
	return(<Menu anchorBox={props.anchorBox} anchor = {props.anchor} width = {props.width}>
	      			<MenuItem>View</MenuItem>
	      			<MenuItem>Take</MenuItem>
	      			<MenuItem>Upload</MenuItem>
	      			<MenuItem>Remove</MenuItem>
  				</Menu>);
}

export default ProfilePicMenu;