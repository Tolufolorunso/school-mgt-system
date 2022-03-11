import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import Container from '@mui/material/Container'
import LoadingButton from '@mui/lab/LoadingButton'
import { useNavigate } from 'react-router-dom'

import { Breadcrumbs, Toast } from '../../../common'

import StudentParentDetailForm from '../components/StudentParentDetailForm'
import StudentParentContactDetailForm from '../components/StudentParentContactDetailForm'
import StudentPersonalDetailForm from '../components/StudentPersonalDetailForm'
import StudentSchoolDetailForm from '../components/StudentSchoolDetailForm'
import { useStudentContext } from '../../../context/student/studentContext'

const initialState = {
  firstname: 'oreofe',
  lastname: 'tolu',
  gender: 'male',
  category: 'jss',
  dateOfBirth: '03/18/2022',
  dateOfAdmission: '03/18/2022',
  religion: 'christain',
  fathersName: 'tolu kola',
  fathersLocation: 'kola kehinde',
  fathersOccupation: 'developer',
  mothersName: 'skdjsdk',
  mothersLocation: 'ado',
  mothersOccupation: 'doc',
  email: 't@yahoo.com',
  phoneNumber: '985794595',
  address_Line_1: 'djsdksd',
  city: 'ado',
  state: 'ekiti',
  postalCode: '234',
  country: 'Nigeria',
  registrationNo: '344',
  classRollNo: '323',
  classAdmittedTo: 'jss2',
  session: '2020/2021',
  term: 'First term',
  disabilities: 'no',
  disabilitiesComment: 'nil',
  height: '443',
  weigth: '434',
  bloodGroup: 'a+',
  genotype: 'aa',
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
  const { addStudent, isLoading, showAlert, alert, alertType } =
    useStudentContext()
  let navigate = useNavigate()
  const classes = useStyles()
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await addStudent(values)
    if (res) {
      navigate('/students')
    }
  }

  return (
    <>
      <Breadcrumbs where='Add' />
      <Container className={classes.root}>
        <Toast showAlert={showAlert} alert={alert} alertType={alertType} />
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
          {/* <Button
            variant='contained'
            type='submit'
            sx={{ height: '60px', minWidth: '350px' }}
          >
            Register Student
          </Button> */}
          <LoadingButton
            loading={isLoading}
            variant='contained'
            type='submit'
            sx={{ height: '60px', minWidth: '350px' }}
          >
            Register Student
          </LoadingButton>
        </Box>
      </Container>
      <Toast showAlert={showAlert} alert={alert} alertType={alertType} />
    </>
  )
}

export default StudentAddNewStudent
