import React, {useContext} from 'react';
import './GlobalOverlay.css';
import {GlobalOverlayContext} from 'Store';

const GlobalOverlay = () => {
	const [overlayOpen ,setOverlayOpen] = useContext(GlobalOverlayContext);
	let className = overlayOpen ? 'overlay open' : 'overlay close';
	return(
		<div className = {className} onClick = {()=>{setOverlayOpen(false)}}>
		</div>
		);
}

export default GlobalOverlay;