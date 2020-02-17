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

	drawerClass = drawerClass + ' ' + props.className;
	drawerOpenClass = drawerOpenClass + ' ' + props.className;

	// console.log('Drawer rendering..')

	const closeDrawer = () =>
	{
		setDrawerOpen(false);
	}
	
	return (
		<div className = {drawerOpen ? drawerOpenClass : drawerClass}>
			<nav className = 'app-theme-color' style = {{display : 'flex', height : '4em', 
			paddingLeft : '0.5em', flex : '0 0 4em'}}>
			<BackButton 
				display = 'flex' 
				look = {backButtonStyle} 
				onClick = {closeDrawer}/>
			<div style = {{color : 'white',
				marginTop : 'auto',
				marginBottom : 'auto',
				marginLeft : '0.5em',
				fontSize : '1.3em',
				fontWeight : '450',
				// lineHeight : '1.3em',
				height : 'auto',
				display: 'flex',
	  			justifyContent: 'center',
	  			alignContent: 'center',
	  			flexDirection: 'column'
			}}>{props.heading}</div>
			</nav>
			{props.children}
		</div>
	);
}

export default Drawer;
