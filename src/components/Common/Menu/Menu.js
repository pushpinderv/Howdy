import React from 'react';
import './Menu.css';

const Menu = (props) =>
{
	let className = props.open ? 'menu card container open' : 'menu card container close';
	return (
		<div className = {className}>{props.children}</div>
		);
}

export default Menu;