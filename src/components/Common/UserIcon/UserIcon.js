import React from 'react';
import './UserIcon.css';

const UserIcon = (props) =>{
	return(		
		<div onClick = {props.onClick} className = 'userIcon' 
		style = {{height : props.height, width : props.width, margin : props.margin}}>
			<div className = 'userHead' />
			<div className = 'userBody' />
			<div className = 'bottomLine' />
			{props.children}
		</div>
		);
}

export default UserIcon;