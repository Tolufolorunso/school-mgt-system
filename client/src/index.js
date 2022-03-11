import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { AuthProvider } from './context/auth/authContext'
import theme from './theme/theme'
import { Toast } from './common'
import { StudentProvider } from './context/student/studentContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StudentProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
          <Toast />
        </ThemeProvider>
      </StudentProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
