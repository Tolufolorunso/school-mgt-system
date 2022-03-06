import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import StudentsTable from '../components/StudentsTable'
import { Breadcrumbs } from '../../../common'

const Student = () => {
  let navigate = useNavigate()

  const handleStudentDetail = (id) => {
    navigate(`/students/${id}`)
  }

  return (
    <>
      <Breadcrumbs where='students' />
      <Container>
        <div style={{ height: 500, width: '100%' }}>
          <StudentsTable handleStudentDetail={handleStudentDetail} />
        </div>
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
