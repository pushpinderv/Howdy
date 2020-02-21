import React from 'react';
import './Menu.css';
import GlobalOverlay from 'components/GlobalOverlay/GlobalOverlay';

const Menu = (props) =>
{
	let className = props.open ? 'menu card container open' : 'menu card container close';
	let width = props.width ? props.width : '230px';
	let anchor = props.anchor ? props.anchor : 'top right';
	className = className + ' ' + anchor;
 	return (
		<>
			<GlobalOverlay open = {props.open} onClick = {props.hideMenu}/>
			<div className = {className} style = {{width : width}}>{props.children}</div>
		</>
		);
}

export default Menu;