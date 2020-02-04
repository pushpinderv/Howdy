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

	// console.log('Drawer rendering..')

	const closeDrawer = () =>
	{
		setDrawerOpen(false);
	}
	
	return (
		<div className = {drawerOpen ? drawerOpenClass : drawerClass} 
		style = {{
			backgroundColor : 'white'
		}}>
		<nav className = 'app-theme-color' style = {{display : 'flex', height : '4em', 
		// backgroundColor : 'grey', 
		flex : 1}}>
		<BackButton style = {{width : '5em'}} look = {backButtonStyle} onClick = {closeDrawer}/>
		</nav>
		</div>
	);
}

export default Drawer;
