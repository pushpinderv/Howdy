import React from 'react';
import Menu from 'components/Common/Menu/Menu';
import MenuItem from 'components/Common/Menu/MenuItem/MenuItem';
import uploadProfilePhoto from 'api/profile/uploadProfilePhoto';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const ProfilePicMenu = (props) => {

	let myID = useSelector(state => state.myID);
	let oldUrl = props.url;

	const {setModalOpen, setProfilePhotoUrl, setImageDisplayVisible, setImageDisplayUrl} = useAction();

	const fileSelectedHandler = (event) =>
	{
		let file = event.target.files[0];
		console.log(file);
		uploadProfilePhoto(oldUrl ,myID , file)
			.then(setModalOpen(false))
			.then(data => {
				setProfilePhotoUrl(data.url);
				if(data.error)
				{
					props.setShowUploadError(true);
					props.setUploadError(data.error);
				}
			});

	}

	const viewClicked = () => {
		console.log('View me');
		setModalOpen(false);
		setImageDisplayVisible(true);
		setImageDisplayUrl(props.url);
	}

	return(<Menu width = '140px'>
	      			<MenuItem onClick = {viewClicked}>View</MenuItem>
	      			{/*<MenuItem>Take</MenuItem>*/}
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
	      			{/*<MenuItem>Remove</MenuItem>*/}
  				</Menu>);
}

export default ProfilePicMenu;