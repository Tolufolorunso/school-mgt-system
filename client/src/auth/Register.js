import React, { useEffect, useState } from 'react'
import './auth.css'

import AuthNav from './AuthNav'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth/authContext'

const initialState = {
  name: 'kolawole kola',
  email: 'tolu@yahoo.com',
  role: '',
  password: '12345',
  passwordConfirm: '12345',
}

const Register = () => {
  let navigate = useNavigate()

  const [values, setValues] = useState(initialState)
  const { register, isLoading, errors, isLoggedIn } = useAuthContext()

  const [errorsObj, setErrors] = useState({})

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const success = await register(values)
    if (success) navigate('/users/login')
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
                    error={errorsObj.name ? true : false}
                    id='outlined-error'
                    label='Fullname'
                    value={values.name}
                    onChange={handleChange}
                    helperText={errorsObj.name}
                    name='name'
                    fullWidth
                  />
                  <TextField
                    error={errorsObj.email ? true : false}
                    id='outlined-error-helper-text'
                    label='Email'
                    value={values.email}
                    helperText={errorsObj.email}
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
                    error={errorsObj.role ? true : false}
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
                    error={errorsObj.password ? true : false}
                    id='outlined-error'
                    label='Password'
                    value={values.password}
                    onChange={handleChange}
                    helperText={errorsObj.password}
                    name='password'
                    fullWidth
                  />
                  <TextField
                    error={errorsObj.passwordConfirm ? true : false}
                    id='outlined-error-helper-text'
                    label='Confirm Password'
                    value={values.passwordConfirm}
                    helperText={errorsObj.passwordConfirm}
                    onChange={handleChange}
                    name='passwordConfirm'
                    fullWidth
                  />
                </Stack>
                <LoadingButton
                  loading={isLoading}
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
