import React from 'react';
import './Drawer.css';
import BackButton from 'components/Common/BackButton/BackButton';

const Drawer = (props) => {

	const [drawerOpen, setDrawerOpen] = props.state;
	const openFrom = props.openFrom;

	let drawerClass, drawerOpenClass;
	let backButtonStyle;
	switch(openFrom)
	{
		case 'right':
			drawerClass = 'Drawer right';
			drawerOpenClass = 'Drawer right open';
			backButtonStyle = 'cancel';
			break;
		default:
			drawerClass = 'Drawer';
			drawerOpenClass = 'Drawer open';
			backButtonStyle = 'back';
	}

	if(props.className){
	drawerClass = drawerClass + ' ' + props.className;
	drawerOpenClass = drawerOpenClass + ' ' + props.className;
}

	const closeDrawer = () =>
	{
		setDrawerOpen(false);
	}
	
	return (
		<div onClick = {props.onClick} className = {drawerOpen ? drawerOpenClass : drawerClass}>
			<nav className = 'drawerNav app-theme-color'>
			<BackButton 
				display = 'flex' 
				look = {backButtonStyle} 
				onClick = {closeDrawer}/>
			<div className = 'drawerHeading'>{props.heading}</div>
			</nav>
			{props.children}
		</div>
	);
}

export default Drawer;
