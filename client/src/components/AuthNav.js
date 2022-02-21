import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../theme/authNav.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

const AuthNav = () => {
  let navigate = useNavigate()
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          School mgt system
        </Typography>
        <Button color='inherit' onClick={() => navigate('/users/login')}>
          Login
        </Button>
        <Button color='inherit' onClick={() => navigate('/users/register')}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default AuthNav
