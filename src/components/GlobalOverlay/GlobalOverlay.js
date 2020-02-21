import React, {useContext,useState} from 'react';
import './GlobalOverlay.css';

const GlobalOverlay = (props) => {
	let className = props.open ? 'overlay open' : 'overlay close';
	return(
		<div className = {className} onClick = {props.onClick} />
		);
}

export default GlobalOverlay;