const initialState = {
	modalView : null
}

const rootReducer = (state = initialState, action) =>{
	const newState = {...state};
	switch(action.type){
		case 'SET_MODAL':
			newState.modalView = action.value;
			return newState;
		default:
			return state;
	}	
}

export default rootReducer;