import React from 'react';
import './GlobalOverlay.css';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const GlobalOverlay = () => {

	let modalView = useSelector(state => state.modalView);
	let open = useSelector(state => state.modalOpen);

	let className = open ? 'overlay open' : 'overlay';

	const {setModalOpen,setModalId,setModalView} = useAction();

	const handleClick = () => {
		console.log('I was touched!');
		setModalOpen(false);
		setModalId('');
	}

	return(
		<div className = {className} onClick = {handleClick}>
		{modalView}
		</div>
		);
}

export default GlobalOverlay;