import React from 'react';
import menuButtonImage from './_ionicons_svg_md-menu.svg';

const MenuButton = (props) => {
	return (
		<button onClick = {props.onClick}
		 style = {{
			display: 'flex', 
			background : 'none', 
			backgroundColor : 'yellow', 
			border : 'none', 
			outline : 'none', 
			width : '2.5em', 
			height : 'auto', 
			cursor : 'pointer', 
			marginRight : '0.5em',
			padding : '0.3em'
		}}>
		<img src = {menuButtonImage} alt = 'Menu'/>
		</button>
	);
}

export default MenuButton;