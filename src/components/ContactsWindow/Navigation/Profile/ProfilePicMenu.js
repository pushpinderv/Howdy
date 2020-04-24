import React from 'react';
import Menu from 'components/Common/Menu/Menu';
import MenuItem from 'components/Common/Menu/MenuItem/MenuItem';
import uploadProfilePhoto from 'api/profile/uploadProfilePhoto';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const ProfilePicMenu = (props) => {

	let myID = useSelector(state => state.myID);

	const {setModalOpen, setProfilePhotoUrl} = useAction();

	const fileSelectedHandler = (event) =>
	{
		let file = event.target.files[0];
		console.log(file);
		uploadProfilePhoto(myID, file)
			.then(setModalOpen(false))
			.then(setProfilePhotoUrl);

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