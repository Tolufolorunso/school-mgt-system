import React, { useState } from 'react'
import { AuthNav } from '../../components'
import { useAppContext } from '../../context/appContext'
// import '../../theme/auth.css'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Login = () => {
  const [values, setValues] = useState({
    email: '@yahoo.com',
    password: '12345',
  })

  const { login } = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log('27 values',values)
    return login(values)
  }

  return (
    <>
      <Box
        components='main'
        sx={{ width: '100%', minHeight: '100vh' }}
        className='auth'
      >
        <AuthNav />
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            mt: 8,
          }}
          noValidate
          autoComplete='off'
          onSubmit={onSubmit}
        >
          <TextField
            error
            id='outlined-error'
            label='Error'
            value={values.email}
            onChange={handleChange}
            helperText='Incorrect entry.'
            name='email'
          />
          <TextField
            error
            id='outlined-error-helper-text'
            label='Error'
            value={values.password}
            helperText='Incorrect entry.'
            onChange={handleChange}
            name='email'
          />
          <Button variant='contained' type='submit'>
            Login
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Login
