import React from 'react';
import ContactProfilePicture from './ContactProfilePicture/ContactProfilePicture';
import ContactName from './ContactName/ContactName';
import ContactLastOnline from './ContactLastOnline/ContactLastOnline';
import ContactVideoCallButton from './ContactVideoCallButton/ContactVideoCallButton';
import BackButton from './BackButton/BackButton';

const ContactDetailBar = () => {
	return (
		<nav style = {{display : 'flex', backgroundColor : 'brown', flex : '0 0 auto', height : '65px'}}>
		<BackButton />
		<ContactProfilePicture />
		<contactinfo style = 
		{{backgroundColor : 'black', display : 'flex', 
		flexDirection : 'column', padding : '0px 20px', 
		alignContent : 'center', margin : 'auto 0px', cursor : 'pointer',
		flex : '1 1 auto', maxWidth : '100%', minWidth : '1px'}}>
		<ContactName />
		<ContactLastOnline />
		</contactinfo>
		<ContactVideoCallButton />
		</nav>
	);
}

export default ContactDetailBar;