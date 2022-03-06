import React, { useState } from 'react'
import './auth.css'

import AuthNav from './AuthNav'
import { useAppContext } from '../context/appContext'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'

const initialState = {
  fullname: 'kolawole kola',
  email: '@yahoo.com',
  role: '',
  password: '12345',
  passwordConfirm: '12345',
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const [isError, setIsError] = useState(false)
  const { register } = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('27 values', values)
    register(values)
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
              <Box sx={{ margin: '10px auto', textAlign: 'center' }}>
                <Typography variant='h4' component='h2' mb={1}>
                  Create an account
                </Typography>
                <Typography variant='subtitle2' component='p'>
                  Note: Registrations only for authorized members will be
                  approved.
                </Typography>
              </Box>
              <Stack spacing={{ xs: 3, sm: 5 }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2 }}
                >
                  <TextField
                    error={isError}
                    id='outlined-error'
                    label='Fullname'
                    value={values.fullname}
                    onChange={handleChange}
                    helperText=''
                    name='fullname'
                    fullWidth
                  />
                  <TextField
                    error={isError}
                    id='outlined-error-helper-text'
                    label='Email'
                    value={values.email}
                    helperText=''
                    onChange={handleChange}
                    name='email'
                    fullWidth
                  />
                </Stack>
                <FormControl fullWidth>
                  <InputLabel id='role'>Choose Role</InputLabel>
                  <Select
                    labelId='role'
                    id='role'
                    value={values.role}
                    label='Choose Role'
                    name='role'
                    onChange={handleChange}
                  >
                    <MenuItem value='Accountant'>Accountant</MenuItem>
                    <MenuItem value='Teacher'>Teacher</MenuItem>
                    <MenuItem value='Principal'>Principal</MenuItem>
                    <MenuItem value='Administrator'>Administrator</MenuItem>
                  </Select>
                </FormControl>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2 }}
                >
                  <TextField
                    error={isError}
                    id='outlined-error'
                    label='Password'
                    value={values.password}
                    onChange={handleChange}
                    helperText=''
                    name='password'
                    fullWidth
                  />
                  <TextField
                    error={isError}
                    id='outlined-error-helper-text'
                    label='Confirm Password'
                    value={values.passwordConfirm}
                    helperText=''
                    onChange={handleChange}
                    name='passwordConfirm'
                    fullWidth
                  />
                </Stack>

                <LoadingButton
                  loading={true}
                  variant='contained'
                  type='submit'
                  endIcon={<SendIcon />}
                  sx={{ height: '45px' }}
                >
                  Register
                </LoadingButton>
              </Stack>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default Register
