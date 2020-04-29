import React, {useContext,useState} from 'react';
import {ContactProfileDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import './ContactProfileDrawer.css';
import updateContactName from 'api/contacts/updateContactName';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';
import useSubscribeToProfilePhoto from 'api/profile/useSubscribeToProfilePhoto';
import {useSubscribeToLastOnline} from 'api/presence/useSubscribeToLastOnline';

const ContactProfileDrawer = (props) => {

	const [drawerOpen, setDrawerOpen] = useContext(ContactProfileDrawerContext);

	const [photoUrl] = useSubscribeToProfilePhoto(props.user_id);

	const myID = useSelector(state => state.myID); 
	const email = useSelector(state => state.chatUserEmail);
	const name = useSelector(state => state.chatUserName);

	const {setChatUserName} = useAction();

	console.log('ContactProfileDrawer : email is ', email);
    console.log('ContactProfileDrawer : name is ', name);


	const NameAndEditHandlingDiv = (props) => {

		const [enableNameEdit, setEnableNameEdit] = useState(false);

		const [name, setName] = useState(props.initialName);

		const PencilIcon = () => {
		return(
			<div onClick = {onEditClick} style = {{width : '1.5em', height : '1.2em'}}>
			<svg className = 'svg-default' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>Click to edit</title><polygon fill = '#92989b' points='103 464 48 464 48 409 358.14 98.09 413.91 153.87 103 464'/><path d='M425.72,142,370,86.28l31.66-30.66C406.55,50.7,414.05,48,421,48a25.91,25.91,0,0,1,18.42,7.62l17,17A25.87,25.87,0,0,1,464,91c0,7-2.71,14.45-7.62,19.36ZM418.2,71.17h0Z' fill = '#92989b'/></svg>
			</div>
			);
		}

		const DoneIcon = () => {
			return(
				<div onClick = {onDoneClick} style = {{width : '1.5em', height : '1.5em'}}>
					<svg className = 'svg-default' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>Update Name</title><polyline points='416 128 192 384 96 288' style={{
						fill :'none',
						stroke : '#92989b',
						strokeLinecap : 'square',
						strokeMiterlimit : '10' ,
						strokeWidth : '44px'}}/>
					</svg>
				</div>
				);
		}

		const onEditClick = () => {
			setEnableNameEdit(true);
		}
		const onDoneClick = () => {
			setEnableNameEdit(false);
			updateContactName(myID, name, email)
				.then(updatedContact => {
					console.log('ContactProfileDrawer: updated contact is', updatedContact);
					setName(updatedContact.name);
					setChatUserName(updatedContact.name);
				});
		}

		const ContactnameDiv = () => {
			return(<div style = {{
						fontSize : '1em', 
						fontWeight : '380',
						color : 'black',
						height : '1.5em',
						lineHeight : '1.5em',
						flex : '1'
					}}>{name}</div>);
		}

		const onContactNameChange = (event) => {
			setName(event.target.value);
		}

		const ContactnameInput = () => {
			return(<input onChange = {onContactNameChange} value = {name} type = 'text' className = 'contactnameInput' autoFocus/>);
		}

		if(enableNameEdit) {
			return (<><ContactnameInput /><DoneIcon /></>);
		}
		else{
			return (<><ContactnameDiv /><PencilIcon /></>);
		}
	}

	return (
		<Drawer heading = 'Contact info' state = {[drawerOpen, setDrawerOpen]} openFrom = 'right'>
			<div style = {{width : 'auto', backgroundColor : '#f7f7f7', display: 'flex', flex : '1', flexDirection : 'column', overflowY : 'auto'}}>
				<div style = {{backgroundColor : 'white',
					boxShadow: '0 2px 0.2em rgba(0, 0, 0, 0.08)'
			}}>
					<UserIcon url = {photoUrl} margin = '2em auto' height = '10em' width = '10em'/>
					<div style = {{
					marginLeft : '1.5rem',
					marginRight : '1.5rem', 
					display : 'flex',
					alignItems : 'center'
					}}>
					<NameAndEditHandlingDiv initialName = {name}/>
					</div>
				<div style = {{marginLeft : '1.5rem',
					marginRight : '1.5rem',
					marginBottom : '1rem',
					marginTop : '0.3em',
					fontSize : '0.85em',
					fontWeight : '350',
					color : '#8c8c8c'
				}}>{useSubscribeToLastOnline()}</div>
				</div>
			</div>

		</Drawer>
	);
}

export default ContactProfileDrawer;
