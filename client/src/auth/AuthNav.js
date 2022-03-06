import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './auth.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Stack } from '@mui/material'

const AuthNav = () => {
  let navigate = useNavigate()
  return (
    <AppBar position='fixed'>
      <Toolbar>
        {/* <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        ></IconButton> */}
        <Typography
          variant='h6'
          component='span'
          href='/landing'
          sx={{ flexGrow: 1 }}
        >
          <Link to='/landing' style={{ color: 'white' }}>
            School mgt system
          </Link>
        </Typography>
        <Stack spacing={1} direction='row'>
          <Button
            color='inherit'
            onClick={() => navigate('/users/login')}
            className='auth_btn'
          >
            Login
          </Button>
          <Button
            variant='outlined'
            color='inherit'
            onClick={() => navigate('/users/register')}
            className='auth_btn'
          >
            Register
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default AuthNav
