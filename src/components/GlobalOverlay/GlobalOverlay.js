import React from 'react';
import './GlobalOverlay.css';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const GlobalOverlay = () => {

	let modalContainer = useSelector(state => state.modalContainer);
	
	let modalView = useSelector(state => state.modalView);

	let open = useSelector(state => state.modalOpen);

	let className = open ? 'overlay open' : 'overlay';

	const {setModalOpen,setModalId} = useAction();

	const handleClick = () => {
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