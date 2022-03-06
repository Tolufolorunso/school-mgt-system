import React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Divider, Typography } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const StudentPersonalDetailForm = ({
  classes,
  handleChange,
  values,
  setValues,
}) => {
  return (
    <div className={classes.formSection}>
      <Typography variant='h5' component='h4' className={classes.title}>
        Personal Detail's
      </Typography>
      <Typography component='p'>
        Enter personal detail's of the student.
      </Typography>
      <Divider sx={{ marginBottom: '40px' }}></Divider>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Firstname'
            variant='outlined'
            name='firstname'
            value={values.firstname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Lastname'
            variant='outlined'
            name='lastname'
            value={values.lastname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={values.gender}
              label='Gender'
              name='gender'
              onChange={handleChange}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Category</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={values.category}
              label='Category'
              name='category'
              onChange={handleChange}
            >
              <MenuItem value='jss'>Jss</MenuItem>
              <MenuItem value='sss'>Sss</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Date Of Birth'
              value={values.dateOfBirth}
              name='dateOfBirth'
              onChange={(newValue) => {
                setValues({ ...values, dateOfBirth: newValue })
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Date Of Admission'
              value={values.dateOfAdmission}
              name='dateOfAdmission'
              onChange={(newValue) => {
                setValues({ ...values, dateOfAdmission: newValue })
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Religion</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={values.religion}
              label='Religion'
              name='religion'
              onChange={handleChange}
            >
              <MenuItem disabled>Choose...</MenuItem>
              {['christain', 'muslim', 'hindu'].map((el, index) => {
                return (
                  <MenuItem key={index} value={el}>
                    {el.toUpperCase()}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id='blood-group'>Blood Group</InputLabel>
            <Select
              labelId='blood-group'
              id='bloodGroup'
              value={values.bloodGroup}
              label='Blood Group'
              name='bloodGroup'
              onChange={handleChange}
            >
              <MenuItem disabled>Choose...</MenuItem>
              {['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-'].map(
                (el, index) => {
                  return (
                    <MenuItem key={index} value={el}>
                      {el.toUpperCase()}
                    </MenuItem>
                  )
                }
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id='genotype'>Geno Type</InputLabel>
            <Select
              labelId='genotype'
              id='genoType'
              value={values.genotype}
              label='Geno Type'
              name='genotype'
              onChange={handleChange}
            >
              <MenuItem disabled>Choose...</MenuItem>
              {['aa', 'ab', 'ac', 'bb', 'bc', 'cc'].map((el, index) => {
                return (
                  <MenuItem key={index} value={el}>
                    {el.toUpperCase()}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Height'
            variant='outlined'
            name='height'
            value={values.height}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Weigth'
            variant='outlined'
            name='weigth'
            value={values.weigth}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel id='disability'>Disabilities</InputLabel>
            <Select
              labelId='disability'
              id='demo-simple-select'
              value={values.disabilities}
              label='Disabilities'
              name='disabilities'
              onChange={handleChange}
            >
              <MenuItem value='yes'>Yes</MenuItem>
              <MenuItem value='no'>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            multiline
            maxRows={4}
            fullWidth
            id='outlined-basic'
            label='If yes, specify'
            variant='outlined'
            name='disabilitiesComment'
            value={values.disabilitiesComment}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default StudentPersonalDetailForm
