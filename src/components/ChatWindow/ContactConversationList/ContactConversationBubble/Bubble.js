import React from 'react';
import './Bubble.css';
import moment from 'moment';

const processTimestamp = (timestamp) => {
	if(timestamp) return moment(timestamp).format('h:mm a');
	else return null;
}

const Bubble = (props) => {
	let className = props.design.includes('left') ? 'talktext' : 'talktext right';
	let timestampClassName = props.design.includes('left') ? 'timestamp' : 'timestamp right';
	if(props.design.includes('info'))  className = 'talktext';
	return (
		<div className = {props.design} >
		  <div className = {className} >
		    {props.text}
		  </div>
		  {
		  (props.time_stamp) ? <div className = {timestampClassName}>{processTimestamp(props.time_stamp)}</div> : null
		  }
		</div>
	);
}

export default Bubble;