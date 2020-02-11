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
		paddingLeft : '0.5em'}}>
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
		<div>
		{props.children}
		</div>
		</div>
	);
}

export default Drawer;
