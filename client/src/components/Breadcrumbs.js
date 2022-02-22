import React from 'react'

import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

function handleClick(event) {
  event.preventDefault()
}

function BasicBreadcrumbs({ where }) {
  const navigate = useNavigate()
  let whatPage = ''
  if (where === 'Add') {
    whatPage = (
      <div>
        <Link
          underline='hover'
          color='inherit'
          href='/'
          onClick={() => navigate('/')}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Home
        </Link>{' '}
        /{' '}
        <Link
          underline='hover'
          color='inherit'
          href='/students'
          onClick={() => navigate('/students')}
        >
          Student
        </Link>
      </div>
    )
  }
  if (where === 'students') {
    whatPage = (
      <div>
        <Link
          underline='hover'
          color='inherit'
          href='/'
          onClick={() => navigate('/')}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Home
        </Link>
      </div>
    )
  }
  return (
    <Container sx={{ padding: '20px 0 40px 0' }}>
      <div role='presentation' onClick={handleClick}>
        <Breadcrumbs aria-label='breadcrumb'>
          {whatPage}
          <Typography color='text.primary'>{where}</Typography>
        </Breadcrumbs>
      </div>
    </Container>
  )
}

export default BasicBreadcrumbs
