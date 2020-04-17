import * as constants from '../constants';

const initialState = {

	//Socket to communicate with server
	socket : null,

	//Login State
	myID : null,

	//Profile State
	myPhotoUrl : '',

	//Chat List State
	chatSearchBarVisible : false,

	//Chat Window State
	chatSelected : false,
	chatUserName : '',
	chatUserLastOnline : '',
	chatUserPhotoUrl : '',
	chatUserEmail : '',
	chatUserID : '',
	chatID : null,

	//Modal State
	modalView : null,
	modalContainer : null,
	modalOpen : false,
	modalId : ''
}

const rootReducer = (state = initialState, action) =>{
	const newState = {...state};
	switch(action.type){
		//Revert to initial state
		case constants.SET_INITIAL_STATE:
			return initialState;

		//Profile Photo Url Setting Action
		case constants.SET_PROFILE_PHOTO_URL:
			newState.myPhotoUrl = action.value;
			return newState;	
		
		//Socket init Action
		case constants.SET_SOCKET:
			newState.socket = action.value;
			return newState;
		
		//Chat Selection Action
		case constants.SET_CHAT_SELECTED:
			newState.chatSelected = action.value;
			return newState;

		//Chat ID setting action
		case constants.SET_CHAT_ID:
			newState.chatID = action.value;
			return newState;	

		//Chat User Setting Action	
		case constants.SET_CHAT_USER:
			newState.chatUserName = action.value.chatUserName;
			newState.chatUserLastOnline = action.value.chatUserLastOnline;
			newState.chatUserPhotoUrl = action.value.chatUserPhotoUrl;	
			newState.chatUserEmail = action.value.chatUserEmail;
			newState.chatID = action.value.chatID;
			newState.chatUserID = action.value.chatUserID;
			return newState;

		//Login Actions
		case constants.SET_MY_ID:
			newState.myID = action.value;
			return newState;

		//Chat List Actions	
		case constants.SET_CHAT_SEARCH_VISIBLE:
			newState.chatSearchBarVisible = action.value;
			return newState;

		//Modal Actions
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