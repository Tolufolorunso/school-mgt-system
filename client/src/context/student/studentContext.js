import React, { useReducer, useContext } from 'react'

import {
  ADD_STUDENT_BEGIN,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  CLEAR_ALERT,
} from './action'
import reducer from './reducer'
import authFetch from '../../common/FetchApi'

const initialState = {
  isLoading: false,
  students: null,
  student: null,
  showAlert: false,
  alert: '',
  alertType: '',
}

const StudentContext = React.createContext()

const StudentProvider = ({ children }) => {
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

  const addStudent = async (studentData) => {
    dispatch({ type: ADD_STUDENT_BEGIN })
    try {
      const { data } = await authFetch.post('/students', studentData)
      console.log(data.student)
      if (data.status) {
        dispatch({ type: ADD_STUDENT_SUCCESS, payload: data.student })
        return true
      }
    } catch (error) {
      console.log(error.response.data)
      dispatch({ type: ADD_STUDENT_ERROR, payload: error.response.data })
      clearAll()
      return false
    }
  }

  return (
    <StudentContext.Provider value={{ ...state, addStudent, closeAlert }}>
      {children}
    </StudentContext.Provider>
  )
}

const useStudentContext = () => {
  return useContext(StudentContext)
}

export { StudentProvider, useStudentContext }
