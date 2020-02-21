import React, {useContext} from 'react';
import ContactProfilePicture from './ContactProfilePicture/ContactProfilePicture';
import ContactName from './ContactName/ContactName';
import ContactLastOnline from './ContactLastOnline/ContactLastOnline';
import ContactVideoCallButton from './ContactVideoCallButton/ContactVideoCallButton';
import BackButton from '../../Common/BackButton/BackButton';
import {ModeContext} from '../../../Store';
import {ContactProfileDrawerContext} from 'Store';
import {ChatDrawerContext} from 'Store';
import './ContactDetailBar.css';

const ContactDetailBar = () => {

	const [mode] = useContext(ModeContext);
	var backButtonDisplay = "none";
	if(mode === "Mobile")
	{
		backButtonDisplay = "flex";
	}

	const [,setContactProfileDrawerOpen] = useContext(ContactProfileDrawerContext);
	const [,setChatDrawerOpen] = useContext(ChatDrawerContext);

	return (
		<div className = 'contactDetailBar app-theme-color'>
		<BackButton display = {backButtonDisplay} onClick = {()=>{setChatDrawerOpen(false)}}/>
		<ContactProfilePicture onClick = {()=>setContactProfileDrawerOpen(true)}/>
		<div className = 'contactInfo' onClick = {()=>setContactProfileDrawerOpen(true)}>
		<ContactName />
		<ContactLastOnline />
		</div>
		<ContactVideoCallButton />
		</div>
	);
}

export default ContactDetailBar;