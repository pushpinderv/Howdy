import React, {useContext} from 'react';
import ContactProfilePicture from './ContactProfilePicture/ContactProfilePicture';
import ContactName from './ContactName/ContactName';
import ContactLastOnline from './ContactLastOnline/ContactLastOnline';
// import ContactVideoCallButton from './ContactVideoCallButton/ContactVideoCallButton';
import BackButton from '../../Common/BackButton/BackButton';
import {ModeContext} from '../../../Store';
import {ContactProfileDrawerContext} from 'Store';
import './ContactDetailBar.css';
import useAction from 'Redux/actions/useAction';
import useSubscribeToProfilePhoto from 'api/profile/useSubscribeToProfilePhoto';
 
const ContactDetailBar = (props) => {

	const {setChatSelected} = useAction();

	const [photoUrl] = useSubscribeToProfilePhoto(props.user_id);

	const [mode] = useContext(ModeContext);
	var backButtonDisplay = "none";
	if(mode === "Mobile")
	{
		backButtonDisplay = "flex";
	}

	const [,setContactProfileDrawerOpen] = useContext(ContactProfileDrawerContext);

	return (
		<div className = 'contactDetailBar app-theme-color'>
		<BackButton display = {backButtonDisplay} onClick = {()=>{setChatSelected(false)}}/>
		<ContactProfilePicture url = {photoUrl} onClick = {()=>setContactProfileDrawerOpen(true)}/>
		<div className = 'contactInfo' onClick = {()=>setContactProfileDrawerOpen(true)}>
		<ContactName name = {props.name} />
		<ContactLastOnline lastOnline = {props.lastOnline} />
		</div>
		{/*<ContactVideoCallButton />*/}
		</div>
	);
}

export default ContactDetailBar;