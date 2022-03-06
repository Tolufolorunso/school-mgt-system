import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import { Breadcrumbs } from '../../../common'

import StudentParentDetailForm from '../components/StudentParentDetailForm'
import StudentParentContactDetailForm from '../components/StudentParentContactDetailForm'
import StudentPersonalDetailForm from '../components/StudentPersonalDetailForm'
import StudentSchoolDetailForm from '../components/StudentSchoolDetailForm'

const initialState = {
  firstname: 'oreofe',
  lastname: 'tolu',
  gender: 'male',
  category: 'jss',
  dateOfBirth: '',
  dateOfAdmission: '',
  religion: 'christain',
  fathersName: 'tolu kola',
  fathersLocation: 'kola kehinde',
  fathersOccupation: 'developer',
  mothersName: '',
  mothersLocation: '',
  mothersOccupation: '',
  email: '',
  phoneNumber: '',
  address_Line_1: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  registrationNo: '',
  classRollNo: '',
  classAdmittedTo: '',
  session: '2020/2021',
  term: 'First term',
  disabilities: '',
  disabilitiesComment: '',
  height: '',
  weigth: '',
  bloodGroup: '',
  genotype: '',
}

const useStyles = makeStyles({
  root: {
    background: '#fff',
    padding: '40px',
  },
  formSection: {
    marginBottom: '50px',
  },
  title: {
    fontWeight: 500,
    fontSize: '1.3rem',
  },
})

const StudentAddNewStudent = () => {
  const classes = useStyles()
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <>
      <Breadcrumbs where='Add' />
      <Container className={classes.root}>
        <Box component='form' onSubmit={handleSubmit}>
          <StudentPersonalDetailForm
            classes={classes}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
          />
          <StudentParentDetailForm
            classes={classes}
            handleChange={handleChange}
            values={values}
          />
          <StudentParentContactDetailForm
            classes={classes}
            handleChange={handleChange}
            values={values}
          />
          <StudentSchoolDetailForm
            classes={classes}
            handleChange={handleChange}
            values={values}
          />
          <Button
            variant='contained'
            type='submit'
            sx={{ height: '60px', minWidth: '350px' }}
          >
            Register Student
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default StudentAddNewStudent
