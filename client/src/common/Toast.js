import React from 'react'
import ReactDOM from 'react-dom'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { useAuthContext } from '../context/auth/authContext'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function Toast({ showAlert, alert, alertType }) {
  const { closeAlert } = useAuthContext()

  const content = (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={closeAlert}>
        <Alert
          onClose={closeAlert}
          severity={!alertType ? 'info' : alertType}
          sx={{ width: '100%' }}
        >
          {alert}
        </Alert>
      </Snackbar>
    </Stack>
  )
  return ReactDOM.createPortal(content, document.getElementById('toast-hook'))
}
