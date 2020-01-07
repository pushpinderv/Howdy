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
			width : '2.5em', 
			height : 'auto',
			padding : '0.3em', 
			cursor : 'pointer', 
			flex : '0 0 auto'}}>
		<img src = {backButtonImage} alt = 'Go Back' />
		</button>
	);
}

export default BackButton;