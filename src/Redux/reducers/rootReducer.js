import * as constants from '../constants';

const initialState = {

	//Image Display
	imageDisplayUrl : '',
	imageDisplayVisible : false,

	//Chat Search Field
	chatSearchField : '',

	//Chats List
	chatsList : [],

	//Contact List
	contactList : [],

	//Socket to communicate with server
	socket : null,

	//Login State
	myID : null,

	//Profile State
	myUserName : '',
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
			//Kill the socket connection
			state.socket.close(); 
			return initialState;

		//Image Display Url setting action
		case constants.SET_IMAGE_DISPLAY_URL:
			newState.imageDisplayUrl = action.value;
			return newState;

		//Image Display visible action
		case constants.SET_IMAGE_DISPLAY_VISIBLE:
			newState.imageDisplayVisible = action.value;
			return newState;	

		//Chat searchField setting action
		case constants.SET_CHAT_SEARCHFIELD:
			newState.chatSearchField = action.value;
			return newState;	

		//Chats setting Action
		case constants.SET_CHATS:
			newState.chats = action.value;
			return newState;

		//Contacts setting Action
		case constants.SET_CONTACTS:
			newState.contacts = action.value;
			return newState;		

		//Profile User Name Setting Action
		case constants.SET_PROFILE_USERNAME:
			newState.myUserName = action.value;
			return newState;	

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

		//Chat User Name Setting Action
		case constants.SET_CHAT_USERNAME:
			newState.chatUserName = action.value;
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