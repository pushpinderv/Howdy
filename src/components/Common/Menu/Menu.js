import React from 'react';
import './Menu.css';

const Menu = (props) =>
{	
	const handleClick = (event) => {
		event.stopPropagation();
		console.log('Menu.js : Consuming touch..')};
	let className = props.open ? 'menu card container open' : 'menu card container close';
	let width = props.width ? props.width : '230px';
	let anchor = props.anchor ? props.anchor : 'top right';
	className = className + ' ' + anchor;
 	return (<div onClick = {handleClick} className = {className} style = {{width : width}}>{props.children}</div>);
}

export default Menu;