import React, {useContext,useState} from 'react';
import {ContactProfileDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import './ContactProfileDrawer.css';

const ContactProfileDrawer = (props) => {
	const [drawerOpen, setDrawerOpen] = useContext(ContactProfileDrawerContext);
		const [enableNameEdit, setEnableNameEdit] = useState(false); 

	const onEditClick = () => {
		setEnableNameEdit(true);
	}
	const onDoneClick = () => {
		setEnableNameEdit(false);
	}

	const ContactnameDiv = () => {
		return(<div style = {{
					fontSize : '1em', 
					fontWeight : '380',
					color : 'black',
					height : '1.5em',
					lineHeight : '1.5em',
					flex : '1'
				}}>Contact Name</div>);
	}

	const ContactnameInput = () => {
		return(<input defaultValue = 'Contact Name' type = 'text' className = 'contactnameInput' autoFocus/>);
	}

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

	const NameAndEditHandlingDiv = () => {
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
					<UserIcon margin = '2em auto' height = '10em' width = '10em'/>
					<div style = {{
					marginLeft : '1.5rem',
					marginRight : '1.5rem', 
					display : 'flex',
					alignItems : 'center'
					}}>
						<NameAndEditHandlingDiv />
					</div>
				<div style = {{marginLeft : '1.5rem',
					marginRight : '1.5rem',
					marginBottom : '1rem',
					marginTop : '0.3em',
					fontSize : '0.85em',
					fontWeight : '350',
					color : '#8c8c8c'
				}}>last seen at 2pm</div>
				</div>
			</div>

		</Drawer>
	);
}

export default ContactProfileDrawer;
