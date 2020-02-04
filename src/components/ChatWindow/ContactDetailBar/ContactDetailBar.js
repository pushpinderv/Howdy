import React, {useContext} from 'react';
import ContactProfilePicture from './ContactProfilePicture/ContactProfilePicture';
import ContactName from './ContactName/ContactName';
import ContactLastOnline from './ContactLastOnline/ContactLastOnline';
import ContactVideoCallButton from './ContactVideoCallButton/ContactVideoCallButton';
import BackButton from '../../Common/BackButton/BackButton';
import {ModeContext} from '../../../Store';
import {ContactProfileDrawerContext} from 'Store';
import {ChatDrawerContext} from 'Store';

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
		<div className = 'app-theme-color' style = {{
			display : 'flex', 
			// backgroundColor : 'green', 
			flex : '0 0 auto', 
			height : '4em',
			zIndex : 3,
			overflow : 'hidden',
			boxShadow: '0px 2px 0.3em rgba(0, 0, 0, 0.15)'
		}}>
		<BackButton display = {backButtonDisplay} onClick = {()=>{setChatDrawerOpen(false)}}/>
		<ContactProfilePicture onClick = {()=>setContactProfileDrawerOpen(true)}/>
		<contact-info onClick = {()=>setContactProfileDrawerOpen(true)} style = 
		{{
		// backgroundColor : 'black', 
		display : 'flex', 
		flexDirection : 'column', padding : '0px 1em', 
		alignContent : 'center', margin : 'auto 0px', cursor : 'pointer',
		flex : '1 1 auto', maxWidth : '100%', minWidth : '1px'}}>
		<ContactName />
		<ContactLastOnline />
		</contact-info>
		<ContactVideoCallButton />
		</div>
	);
}

export default ContactDetailBar;