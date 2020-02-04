import React from 'react';
import './Bubble.css';

const Bubble = (props) => {
	let className = props.design.includes('left') ? 'talktext' : 'talktext right';
	if(props.design.includes('info'))  className = 'talktext'; 
	return (
		<div className = {props.design} >
		  <div className = {className} >
		    {props.text}
		  </div>
		</div>
	);
}

export default Bubble;