import React from 'react';

const UserIcon = (props) =>{
	return(		
		<div onClick = {props.onClick} className = 'userIcon' style = {{ 
			backgroundColor : '#dfe5e7', 
			height : props.height, 
			width : props.width,
			cursor : 'pointer',
			flex : '0 0 auto',
			flexDirection : 'column',
			overflow : 'hidden',
			position : 'relative',
			margin : props.margin
		}}>
			<div className = 'userHead' />
			<div className = 'userBody' />
			<div className = 'bottomLine' />
		</div>
		);
}

export default UserIcon;