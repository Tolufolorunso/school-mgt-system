import { AUTH_BEGIN, AUTH_SUCCESS, AUTH_ERROR, CLEAR_ALERT } from './action'

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

  if (AUTH_BEGIN === type) {
    return { ...state, isLoading: true }
  }

  if (AUTH_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alert: payload,
      alertType: 'success',
    }
  }

  if (AUTH_ERROR === type) {
    console.log(payload)
    return {
      ...state,
      isLoading: false,
      errors: payload.errors,
      showAlert: true,
      alert: payload.errorMessage,
      alertType: 'error',
    }
  }

  throw new Error(`No such acyion :${action.type}`)
}

export default reducer
