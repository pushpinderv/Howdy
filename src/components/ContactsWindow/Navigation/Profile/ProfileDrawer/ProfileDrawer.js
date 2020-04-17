import React, {useContext,useState} from 'react';
import {ProfileDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import './ProfileDrawer.css';
import useAction from 'Redux/actions/useAction';
import ProfilePicMenu from '../ProfilePicMenu';
import {useSelector} from 'react-redux';
import {useBoundingBox} from 'hooks/useBoundingBox';

const ProfileDrawer = (props) => {

	const [boundingRect, ref] = useBoundingBox();

	const myModalId = 'profile';

	const {setModalView,setModalOpen,setModalId,setModalContainer} = useAction();
    const currentModalId = useSelector(state => state.modalId);

    const profilePhotoUrl = useSelector(state => state.myPhotoUrl);

    console.log('ProfileDrawer : Photo Url', profilePhotoUrl);

	const onUserIconClick = () =>
	{
		setModalId(myModalId);
		setModalOpen(true);
	}

	const MenuContainerDiv = <div ref = {ref} className = 'picAndMenuContainer'>
					<UserIcon url = {profilePhotoUrl} onClick = {onUserIconClick} height = '10em' width = '10em' />
				</div>;

	const PhantomContainer = (props) => {
		return(
			<div style = {{
				top : props.boundingRect.top,
				left : props.boundingRect.left,
				width : props.boundingRect.width,
				height : props.boundingRect.height,
				position : 'absolute'
			}}>
				{props.children}
			</div>
			);
	}			

	const MenuModal = <PhantomContainer boundingRect = {boundingRect}><ProfilePicMenu /></PhantomContainer>;

	if(currentModalId === myModalId)
	{	
		setModalContainer(MenuContainerDiv);
		setModalView(MenuModal);
	}

	const UsernameDiv = () => {
		return(<div className = 'username'>Username</div>);
	}

	const UsernameInput = () => {
		return(<input defaultValue = 'Username' type = 'text' className = 'usernameInput' autoFocus/>);
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
			return (<><UsernameInput /><DoneIcon /></>);
		}
		else{
			return (<><UsernameDiv /><PencilIcon /></>);
		}
	}

	const onEditClick = () => {
		setEnableNameEdit(true);
	}
	const onDoneClick = () => {
		setEnableNameEdit(false);
	}

	const [profileDrawerOpen, setProfileDrawerOpen] = useContext(ProfileDrawerContext);
	const [enableNameEdit, setEnableNameEdit] = useState(false);

	return (
		<Drawer className = 'profileDrawer' heading = 'Profile' state = {[profileDrawerOpen, setProfileDrawerOpen]} openFrom = 'left'>
			<div className = 'pdContainer'>
				{MenuContainerDiv}
				<div style = {{
					backgroundColor: 'white',
					boxShadow: '0 -1px 0.1em rgba(0, 0, 0, 0.03), 0 2px 0.2em rgba(0, 0, 0, 0.08)'}}>
					<div style = {{
						margin : '1em 2rem', 
						fontSize : '0.88em', 
						fontWeight : '450',
						color : '#754fff'
					}}>Your Name</div>
					<div style = {{
						margin : '1em 2rem', 
						display : 'flex',
						alignItems : 'center'
					}}>
					<NameAndEditHandlingDiv />
					</div>
				</div>
			</div>
		</Drawer>
	);
}

export default ProfileDrawer;
