import React from 'react';
import menuButtonImage from './_ionicons_svg_md-menu.svg';

const Menu = () => {
	return (
		<button style = {{display: 'flex', background : 'none', backgroundColor : 'yellow', border : 'none', 
		outline : 'none', width : '40px', height : 'auto', cursor : 'pointer', marginRight : '10px'}}>
		<img src = {menuButtonImage} />
		</button>
	);
}

export default Menu;