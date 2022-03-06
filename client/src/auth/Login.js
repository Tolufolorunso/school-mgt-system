import React, { useState } from 'react'
import AuthNav from './AuthNav'
import { useAppContext } from '../context/appContext'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import './auth.css'

const Login = () => {
  const [values, setValues] = useState({
    email: '@yahoo.com',
    password: '12345',
  })

  const [isError, setIsError] = useState(false)

  const { login } = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('27 values', values)
    login(values)
  }

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
                error={isError}
                id='outlined-error'
                label='Email'
                value={values.email}
                onChange={handleChange}
                helperText={''}
                name='email'
              />
              <TextField
                error={isError}
                id='outlined-error-helper-text'
                label='Password'
                value={values.password}
                helperText={''}
                onChange={handleChange}
                name='password'
                mb={3}
              />
              <LoadingButton
                loading={true}
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
