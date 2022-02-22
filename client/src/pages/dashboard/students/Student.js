import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import { Breadcrums } from '../../../components'

const Student = () => {
  let navigate = useNavigate()

  return (
    <>
      <Breadcrums where='students' />
      <Container>
        <Typography component='h1'>Hello</Typography>
      </Container>
      <Box sx={{ position: 'absolute', bottom: '40px', right: '60px' }}>
        <Fab
          color='primary'
          aria-label='add'
          onClick={() => navigate('/students/add')}
        >
          <AddIcon />
        </Fab>
      </Box>
    </>
  )
}

export default Student
