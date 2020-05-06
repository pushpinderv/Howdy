import React, {useContext,useState} from 'react';

import {NewChatDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';
import StickyHeaderList from '../StickyHeaderList/StickyHeaderList';
import './NewChatDrawer.css';

import {useSelector} from 'react-redux';

import createContact from 'api/contacts/createContact';

import {useSubscribeToContacts} from 'hooks/useSubscribeToContacts';

const NewContactDiv = (props) => {
	return(
		<div onClick = {()=>{props.setOpen(true)}} className = 'newContactDiv'>
			<div className = 'br2 newContactIcon' >
				<svg  className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path className = 'svg-path-newContact' d="M416 
					277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" 
					strokeWidth = '1px'/>
				</svg>
			</div>
			<div className = 'newContactText'>New Contact</div>
		</div>
		);
}

const SearchContactsBar = (props) => {
	return(
		<div className = 'app-theme-color-light shadow-below' style = {{
				display : 'flex', 
				padding : '0.6em 0.75em', 
				// backgroundColor : 'blue', 
				flex : '0 0 auto', 
				height : '3.7em'
		}}>
			<input onChange = {props.onChange} value = {props.value} placeholder = 'Search contacts' className = 'br-pill bn ph3' 
			style = {{
				flex : '1 1 auto', 
				minWidth : '100%', 
				outline : 'none',
				fontSize : '1em', 
				lineHeight : '1.4em'
			}} type = 'text' />
		</div>
		);
}

const NewChatDrawer = (props) => {

	let myID = useSelector(state => state.myID);

	const [contacts] = useSubscribeToContacts();

	const [contactSearchField, setContactSearchField] = useState('');
	const onContactSearchChange = (event) => {
		setContactSearchField(event.target.value);
		console.log(event.target.value);
	}	 
	
	const [drawerOpen, setDrawerOpen] = useContext(NewChatDrawerContext);
	const [newContactOpen, setNewContactOpen] = useState(false);

	const AddContactForm = () => {

		const [contactName, setContactName] = useState('');
		const onContactNameChange = (event) => 
		{
			setContactName(event.target.value);
		}

		const [contactEmail, setContactEmail] = useState('');
		const onContactEmailChange = (event) => 
		{
			setContactEmail(event.target.value);
		}

		const [error, setError] = useState('An error occured');
		const [showError, setShowError] = useState(false);

		const createContactClicked = () => {

			setShowError(false);
			
			createContact(myID, contactName, contactEmail)
		        .then(response => {

		        	if(response.status === 400)
		        	{
		        		setError("Cannot create contact. Please check the entered information");
		        		setShowError(true);
		        	}

		        	else
		        	{
		        		console.log('Contacts now:', response);
						setNewContactOpen(false);
					}	

		        });

		}

		return (<div style = {{ padding : '1em 1.5em', flex : '1',
				 display : 'flex', flexDirection : 'column', overflowY : 'auto'
				}}>
					<div style = {{display : 'flex', 
					justifyContent : 'space-around'}}>
						<div style = {{fontSize : '1em', lineHeight : '2em', fontWeight : '480', 
						height : '2em', width : '2.5em', flex : '0 0 2.5em', textAlign : 'right', marginTop : '0.8em'}}>Name</div>
						<input onChange = {onContactNameChange} className = 'textInput' type = 'text' />
					</div>
					<div style = {{display : 'flex',
					justifyContent : 'space-around', marginTop : '1.2em'}}>
						<div style = {{fontSize : '1em', lineHeight : '2em', fontWeight : '480',
						height : '2em', width : '2.5em', flex : '0 0 2.5em', textAlign : 'right'}}>Email</div>
						<input onChange = {onContactEmailChange} className = 'textInput' type = 'text' />
					</div>
					<div onClick = {createContactClicked} className = 'br2 createButton'>Create Contact</div>
					{showError ? (<div className = 'errorMessage shake'>{error}</div>) : null}
				</div>);
	}

	return (
		<Drawer heading = 'New chat' state = {[drawerOpen, setDrawerOpen]} openFrom = 'left'>
			<SearchContactsBar value = {contactSearchField} onChange = {onContactSearchChange}/>
			<StickyHeaderList contactList = {contacts.filter(c => c.name.toLowerCase().includes(contactSearchField.toLowerCase()))} onItemClick = {()=>{setDrawerOpen(false)}}>
				<NewContactDiv setOpen = {setNewContactOpen}/>
			</StickyHeaderList>
			<Drawer heading = 'Add Contact' state = {[newContactOpen, setNewContactOpen]} openFrom = 'right'>
				<AddContactForm />
			</Drawer>
		</Drawer>
	);
}

export default NewChatDrawer;
