import {SET_MODAL} from '../constants';
import { useDispatch } from 'react-redux'

const actions = () =>{
	const dispatch = useDispatch()
}

export const showModal = (modalView) => {
  return (dispatch({type : SET_MODAL, value : modalView}));
}

export default actions;
