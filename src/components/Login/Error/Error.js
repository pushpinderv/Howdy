import React from 'react';
import './Error.css';

const Error = (props) => {
	let className = props.visible ? 'error visible' : 'error';
	return (<div className = {className}>{props.message}</div>);
}

export default Error;