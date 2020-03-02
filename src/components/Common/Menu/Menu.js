import React from 'react';
import './Menu.css';
import {useSelector} from 'react-redux';

const Menu = (props) =>
{	
	const handleClick = (event) => {
		event.stopPropagation();
		console.log('Menu.js : Consuming touch..')};

	let open = useSelector(state => state.modalOpen);
	
	let className = open ? 'menu card container open' : 'menu card container';
	let width = props.width ? props.width : '230px';
	let anchor = props.anchor ? props.anchor : 'center';
	className = className + ' ' + anchor;
 	return (<div onClick = {handleClick} className = {className} style = {{width : width}}>{props.children}</div>);
}

export default Menu;