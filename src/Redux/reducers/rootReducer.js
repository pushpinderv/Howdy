import * as constants from '../constants';

const initialState = {
	modalView : null,
	modalContainer : null,
	modalOpen : false,
	modalId : ''
}

const rootReducer = (state = initialState, action) =>{
	const newState = {...state};
	switch(action.type){
		case constants.SET_MODAL_VIEW:
			newState.modalView = action.value;
			return newState;
		case constants.SET_MODAL_OPEN:
			newState.modalOpen = action.value;
			return newState;
		case constants.SET_MODAL_ID:
			newState.modalId = action.value;
			return newState;	
		case constants.SET_MODAL_CONTAINER:
			newState.modalContainer = action.value;
			return newState;			
		default:
			return state;
	}	
}

export default rootReducer;