import React from 'react';
import menuButtonImage from './_ionicons_svg_md-menu.svg';

const Menu = () => {
	return (
		<button style = {{
			display: 'flex', 
			background : 'none', 
			backgroundColor : 'yellow', 
			border : 'none', 
			outline : 'none', 
			width : '2.5em', 
			height : 'auto', 
			cursor : 'pointer', 
			marginRight : '0.5em',
			justifyContent : 'center',
			alignItems : 'stretch'
		}}>
		<img src = {menuButtonImage} alt = 'Menu'/>
		</button>
	);
}

export default Menu;