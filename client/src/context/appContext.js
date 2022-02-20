import React, { useReducer, useContext } from 'react'

import axios from 'axios'

import { REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_ERROR } from './action'
import reducer from './reducer'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initialState = {
  isLoading: false,
  showAlert: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  errors: null,
  alert: '',
  alertType: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // axios
  const authFetch = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
  })
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        // logoutUser()
      }
      return Promise.reject(error)
    }
  )

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const register = async (data) => {
    dispatch({ type: REGISTER_BEGIN })
    try {
      console.log('context', data)
      const res = await authFetch.post('/users/register', data)
      console.log(76, res.data)
      // addUserToLocalStorage({user: res.data.user, token:res.data.token})
    } catch (error) {
      console.log('error', error.response.data)
    }
  }

  const login = async (data) => {
    dispatch({ type: REGISTER_BEGIN })
    try {
      console.log('context', data)
      const res = await authFetch.post('/users/login', data)
      console.log(76, res.data)
      addUserToLocalStorage({ user: res.data.user, token: res.data.token })
    } catch (error) {
      console.log('error', error.response.data)
    }
  }

  return (
    <AppContext.Provider value={{ ...state, register, login }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
