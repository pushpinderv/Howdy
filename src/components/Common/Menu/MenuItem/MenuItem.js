import React from 'react';
import './MenuItem.css';

const MenuItem = (props) =>
{
	let icon;
	if(props.icon) {icon = <img className = 'icon' src = {props.icon} alt = 'icon'/>} 

	return (
		<div className = 'menuItem' onClick = {props.onClick}>
		{icon}
		<div className = 'text'>{props.children}</div>
		</div>
		);
}

export default MenuItem;