import React from 'react';
import './Bubble.css';

const Bubble = (props) => {
	return (
		<div className = {props.design}>
		  <div className="talktext">
		    {props.text}
		  </div>
		</div>
	);
}

export default Bubble;