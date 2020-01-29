import React from 'react';
import './MenuItem.css';

const MenuItem = (props) =>
{
	return (
		<div className = 'menuItem' onClick = {props.onClick}>
		<img className = 'icon' src = {props.icon} alt = 'icon'/>
		<div className = 'text'>{props.children}</div>
		</div>
		);
}

export default MenuItem;