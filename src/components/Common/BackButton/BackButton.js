import React from 'react';
// import backButtonImage from './_ionicons_svg_md-arrow-back.svg';
// import cancelButtonImage from './_ionicons_svg_md-close.svg';

const BackButton = (props) => {

	let image = () => {
		return(
		<svg className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path className = 'svg-path-default' strokeWidth = '0.06em' d="M427 234.625H167.296l119.702-119.702L256 
		85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/></svg>
		);
	}
	if(props.look === 'cancel')
		image = () => {
		return(
		<svg className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path className = 'svg-path-default' strokeWidth = '0.04em' d="M405 136.798L375.202 107 256 226.202 136.798 107 107 
		136.798 226.202 256 107 375.202 136.798 
		405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>);
	}

	return (
		<button onClick = {props.onClick} style = {{
			display: props.display, 
			background : 'none', 
			// backgroundColor : 'yellow', 
			border : 'none', 
			outline : 'none', 
			width : '2.7em', 
			height : 'auto',
			padding : '0.3em', 
			cursor : 'pointer', 
			flex : '0 0 auto'
		}}>
		{image()}
		</button>
	);
}

export default BackButton;