import React from 'react';
import './GlobalOverlay.css';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const GlobalOverlay = () => {

	let modalView = useSelector(state => state.modalView);

	let className = modalView ? 'overlay open' : 'overlay close';

	const {showModal} = useAction();

	const handleClick = () => {
		console.log('I was touched!');
		showModal(null);
	}

	return(
		<div className = {className} onClick = {handleClick}>
		{modalView}
		</div>
		);
}

export default GlobalOverlay;