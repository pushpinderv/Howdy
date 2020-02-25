import {SET_MODAL} from '../constants';
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const useAction = () => {
  const dispatch = useDispatch()

  const actions = useMemo(() => ({
    showModal(modalView) {
      dispatch({type : SET_MODAL, value : modalView})
    }
  }), [dispatch])

  return actions
}

export default useAction