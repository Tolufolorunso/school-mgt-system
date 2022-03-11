import React, { useEffect, useState } from 'react'
import AuthNav from './AuthNav'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import './auth.css'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth/authContext'

const Login = () => {
  const [values, setValues] = useState({
    email: 'tolu@yahoo.com',
    password: '12345',
  })
  let navigate = useNavigate()

  const [errorsObj, setErrors] = useState({})

  const { login, isLoading, errors, isLoggedIn } = useAuthContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const success = await login(values)
    if (success) navigate('/')
  }

  useEffect(() => {
    setErrors({ ...errors })
  }, [errors])

  return (
    <>
      <Box component='main' className='auth'>
        <AuthNav />
        <Container className='auth__container'>
          <Paper elevation={3} sx={{ width: '550px' }}>
            <Box
              component='form'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                p: 4,
              }}
              noValidate
              autoComplete='off'
              onSubmit={onSubmit}
            >
              <Typography variant='h4' component='h2' my={3}>
                Login to your dashboard
              </Typography>
              <TextField
                error={errorsObj.email ? true : false}
                id='outlined-error'
                label='Email'
                value={values.email}
                onChange={handleChange}
                helperText={errorsObj.email}
                name='email'
              />
              <TextField
                error={errorsObj.password ? true : false}
                id='outlined-error-helper-text'
                label='Password'
                value={values.password}
                helperText={errorsObj.password}
                onChange={handleChange}
                name='password'
                mb={3}
              />
              <LoadingButton
                loading={isLoading}
                variant='contained'
                type='submit'
                endIcon={<SendIcon />}
                sx={{ height: '45px' }}
              >
                Login
              </LoadingButton>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default Login
