import * as constants from '../constants';
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const useAction = () => {
  const dispatch = useDispatch()

  const actions = useMemo(() => ({

    //Set chat search field
    setChatSearchField(value) {
      dispatch({type : constants.SET_CHAT_SEARCHFIELD, value : value})
    },

    //Set chat search bar visible
    setSearchChatsVisible(visible) {
      dispatch({type : constants.SET_CHAT_SEARCH_VISIBLE, value : visible})
    },

    //Set Chats
    setChats(chats) {
      dispatch({type : constants.SET_CHATS, value : chats})
    },

    //Set Contacts
    setContacts(contacts) {
      dispatch({type : constants.SET_CONTACTS, value : contacts})
    },

    //Set my Profile user name
    setProfileUserName(myUserName) {
      dispatch({type : constants.SET_PROFILE_USERNAME, value : myUserName})
    },    

    //Set my Profile photo url
    setProfilePhotoUrl(myPhotoUrl) {
      dispatch({type : constants.SET_PROFILE_PHOTO_URL, value : myPhotoUrl})
    },

  	//Set chat ID Action
  	setChatID(chatID) {
  		console.log('useAction: Chat id is being set to ', chatID);
  		dispatch({type : constants.SET_CHAT_ID, value : chatID})
  	},

  	//Initialize App Action
  	initialize() {
  		dispatch({type : constants.SET_INITIAL_STATE})
  	},

  	//Socket Action
  	setSocket(socket) {
  		dispatch({type : constants.SET_SOCKET, value : socket})
  	},

  	//Login Actions
  	setMyID(id) {
  		dispatch({type : constants.SET_MY_ID, value : id})
  	},

  	//Chat selection Action
  	setChatSelected(selected) {
  		dispatch({type : constants.SET_CHAT_SELECTED, value : selected})
  	},

  	//Chat Window actions
  	setChatUser(user) {
  		dispatch({type : constants.SET_CHAT_USER, value : user})
  	},

    setChatUserName(name) {
      dispatch({type : constants.SET_CHAT_USERNAME, value : name})
    },

  	//Chat List Actions
  	setSearchBarVisible(visible) {
  		dispatch({type : constants.SET_CHAT_SEARCH_VISIBLE, value : visible})
  	},

  	//Modal Actions
  	setModalContainer(view) {
		dispatch({type : constants.SET_MODAL_CONTAINER, value : view})
    },
    setModalView(view) {
		dispatch({type : constants.SET_MODAL_VIEW, value : view})
    },
    setModalOpen(open) {
    	dispatch({type : constants.SET_MODAL_OPEN, value : open})
    },
    setModalId(id) {
    	dispatch({type : constants.SET_MODAL_ID, value : id})
    }
  }), [dispatch])

  return actions
}

export default useAction