import React from 'react';
import './UserIcon.css';

const UserIcon = (props) =>{
	let url = props.url ? props.url : '';
	let className = (url.length > 0) ? 'image' : 'image hidden';
	let containerClassName = props.className ? 'userIcon ' + props.className : 'userIcon';

	return(	
		<div onClick = {props.onClick} className = {containerClassName} 
		style = {{height : props.height, width : props.width, margin : props.margin}}>
			<div className = 'userHead' />
			<div className = 'userBody' />
			<div className = 'bottomLine' />
			{props.children}
			<img className = {className} src = {url} alt = 'profile' />
		</div>
		);
}

export default UserIcon;