import React, {useContext} from 'react';
import backButtonImage from './_ionicons_svg_md-arrow-back.svg';
import {ModeContext} from '../../../Store';

const BackButton = () => {

	const [mode] = useContext(ModeContext);
	var display = "none";
	if(mode === "Mobile")
	{
		display = "flex";
	}
	return (
		<button style = {{
			display: display, 
			background : 'none', 
			backgroundColor : 'yellow', 
			border : 'none', 
			outline : 'none', 
			width : '40px', 
			height : 'auto', 
			cursor : 'pointer', 
			flex : '0 0 auto'}}>
		<img src = {backButtonImage} alt = 'Go Back' />
		</button>
	);
}

export default BackButton;