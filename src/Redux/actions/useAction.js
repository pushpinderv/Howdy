import * as constants from '../constants';
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const useAction = () => {
  const dispatch = useDispatch()

  const actions = useMemo(() => ({
  	//Set chat ID Action
  	setChatID(chatID) {
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

  	//Chat Window action
  	setChatUser(user) {
  		dispatch({type : constants.SET_CHAT_USER, value : user})
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