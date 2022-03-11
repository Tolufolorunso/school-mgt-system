import React, { useReducer, useContext } from 'react'

import { AUTH_BEGIN, AUTH_SUCCESS, AUTH_ERROR, CLEAR_ALERT } from './action'
import reducer from './reducer'
import authFetch from '../../common/FetchApi'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  errors: null,
  errorMessage: '',
  showAlert: false,
  alert: '',
  alertType: '',
  isLoggedIn: token && user ? true : false,
}

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch({ type: CLEAR_ALERT })
  }

  const clearAll = (event, reason) => {
    setTimeout(function () {
      closeAlert()
    }, 4000)
  }

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const register = async (data) => {
    dispatch({ type: AUTH_BEGIN })
    try {
      const res = await authFetch.post('/users/register', data)
      dispatch({ type: AUTH_SUCCESS, payload: res.data.message })
      clearAll()
      return true
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data })
      clearAll()
    }
  }

  const login = async (data) => {
    dispatch({ type: AUTH_BEGIN })
    try {
      const res = await authFetch.post('/users/login', data)
      dispatch({ type: AUTH_SUCCESS, payload: 'You logged in successfully' })
      addUserToLocalStorage({ user: res.data.user, token: res.data.token })
      clearAll()
      return true
    } catch (error) {
      console.log('error', error.response.data)
      dispatch({ type: AUTH_ERROR, payload: error.response.data })
    }
  }

  const logout = () => {
    removeUserFromLocalStorage()
  }

  return (
    <AuthContext.Provider
      value={{ ...state, register, login, logout, closeAlert }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuthContext }
