import React from 'react';
import backButtonImage from './_ionicons_svg_md-arrow-back.svg';

const BackButton = () => {
	return (
		<button style = {{display: 'flex', background : 'none', backgroundColor : 'yellow', border : 'none', 
		outline : 'none', width : '40px', height : 'auto', cursor : 'pointer', flex : '0 0 auto'}}>
		<img src = {backButtonImage} />
		</button>
	);
}

export default BackButton;