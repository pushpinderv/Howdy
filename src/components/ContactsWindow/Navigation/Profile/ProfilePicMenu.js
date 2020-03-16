import React from 'react';
import Menu from 'components/Common/Menu/Menu';
import MenuItem from 'components/Common/Menu/MenuItem/MenuItem';

const ProfilePicMenu = (props) => {
	const fileSelectedHandler = (event) =>{
		console.log(event.target.files[0]);
	}
	return(<Menu width = '140px'>
	      			<MenuItem>View</MenuItem>
	      			<MenuItem>Take</MenuItem>
	      			<MenuItem>Upload<input type = 'file' 
	      			onChange = {fileSelectedHandler}
	      			style = {{
	      				position : 'absolute',
	      				top : 0,
	      				left : 0,
	      				bottom : 0,
	      				right : 0,
	      				opacity : 0
	      				}}/></MenuItem>
	      			<MenuItem>Remove</MenuItem>
  				</Menu>);
}

export default ProfilePicMenu;