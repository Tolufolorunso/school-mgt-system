import {
  ADD_STUDENT_BEGIN,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  CLEAR_ALERT,
} from './action'

const reducer = (state, action) => {
  const { type, payload } = action
  if (CLEAR_ALERT === type) {
    return {
      ...state,
      errors: null,
      errorMessage: '',
      showAlert: false,
      alert: '',
      alertType: '',
    }
  }

  if (ADD_STUDENT_BEGIN === type) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (ADD_STUDENT_SUCCESS === type) {
    return {
      ...state,
      student: payload,
      isLoading: false,
      showAlert: true,
      alert: 'Student registration successfull',
      alertType: 'success',
    }
  }

  if (ADD_STUDENT_ERROR === type) {
    return {
      ...state,
      isLoading: false,
    }
  }

  //throw error
  throw new Error(`No such action :${action.type}`)
}

export default reducer
