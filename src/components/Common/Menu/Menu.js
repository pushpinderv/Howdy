import React from 'react';
import './Menu.css';
import {useSelector} from 'react-redux';
// import {useBoundingBox} from 'hooks/useBoundingBox';

const Menu = (props) =>
{	
	// const [boundingBox, ref] = useBoundingBox();
	let open = useSelector(state => state.modalOpen);

	const handleClick = (event) => {
		event.stopPropagation();
		console.log('Menu.js : Consuming touch..')
	};
		// console.log(window.scrollX);
		// console.log(window.scrollY);
		// console.log(props.anchorBox);
		// console.log('Menu.js :', props.anchorBox.left + window.scrollX + ' ' + props.anchorBox.top + window.scrollY);
		// console.log(props.refProp);

	let className = open ? 'menu card container open' : 'menu card container close';
	let width = props.width ? props.width : '230px';
	let height = width;
	let left;
	let top;
	
	if(props.anchorBox !== {}) {
		left = props.anchorBox.left + window.scrollX;
		left = left + (props.anchorBox.width - parseInt(width))/2;
		top = props.anchorBox.top + window.scrollY;
		// top = top + (props.anchorBox.height - parseInt(height))/2;
	}

 	return (<div onClick = {handleClick} className = {className} 
 		style = {{
 			width : width,
 			left : left, 
 			top : top}}>
 		{props.children}</div>);
}

export default Menu;