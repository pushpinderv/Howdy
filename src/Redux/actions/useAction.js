import * as constants from '../constants';
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const useAction = () => {
  const dispatch = useDispatch()

  const actions = useMemo(() => ({
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