import React from 'react'
import Container from '@mui/material/Container'
import { useParams, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

import { Breadcrumbs, Toast } from '../../../common'
import avater from '../../../assets/images/backgrounds/01.jpg'
import StudentEditPersonalDetail from '../components/StudentEditPersonalDetail'
import StudentEditParentDetail from '../components/StudentEditParentDetail'
import StudentMedicalDetail from '../components/StudentMedicalDetail'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

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

const StudentProfile = () => {
  let { id } = useParams()
  const navigate = useNavigate()

  const [value, setValue] = React.useState('student')
  const [values, setValues] = React.useState(initialState)
  const [isEdit, setIsEdit] = React.useState(true)

  const tabHandler = (event, newValue) => {
    setValue(newValue)
  }

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    console.log('saved', values)
    setIsEdit(true)
  }

  return (
    <>
      <Breadcrumbs where='student' />
      <Toast />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              marginBottom: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant='h3' component='h1'>
              Tolu Folorunso
            </Typography>
            <ButtonGroup disableElevation variant='contained' sx={{ mb: 1 }}>
              <Button onClick={() => setIsEdit(!isEdit)}>
                {isEdit ? 'Edit' : 'Cancel'}
              </Button>
              <Button onClick={handleSave} disabled={isEdit}>
                Save
              </Button>
              <Button onClick={() => navigate('/students')}>Close</Button>
            </ButtonGroup>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={1}>
            <Grid item xs={12} md={2}>
              <Stack direction='column'>
                <Avatar
                  alt='Remy Sharp'
                  src={avater}
                  sx={{ width: '100%', height: 200 }}
                  variant='rounded'
                />
                <Typography variant='h6' component='h3'>
                  Class: Jss 1
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={10}>
              <Item>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      onChange={tabHandler}
                      // variant='fullWidth'
                      // aria-label='lab API tabs example'
                      // orientation='vertical'
                      variant='scrollable'
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label='scrollable force tabs example'
                    >
                      <Tab label="Student's Details" value='student' />
                      <Tab label='Parent"s Detail' value='parent' />
                      <Tab label='Medical Records' value='medical' />
                      <Tab label='Result/Report' value='result' />
                    </TabList>
                  </Box>
                  <TabPanel value='student'>
                    <StudentEditPersonalDetail
                      isEdit={isEdit}
                      values={values}
                      handleChange={changeHandler}
                      setValues={setValues}
                    />
                  </TabPanel>
                  <TabPanel value='parent'>
                    <StudentEditParentDetail
                      isEdit={isEdit}
                      values={values}
                      handleChange={changeHandler}
                      setValues={setValues}
                    />
                  </TabPanel>
                  <TabPanel value='medical'>
                    <StudentMedicalDetail
                      isEdit={isEdit}
                      values={values}
                      handleChange={changeHandler}
                      setValues={setValues}
                    />
                  </TabPanel>
                  <TabPanel value='result'></TabPanel>
                </TabContext>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default StudentProfile
