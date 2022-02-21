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

const StudentSchoolDetailForm = ({
  classes,
  handleChange,
  values,
  setValues,
}) => {
  return (
    <div className={classes.formSection}>
      <Typography variant='h5' component='h4' className={classes.title}>
        Student Academy Detail's
      </Typography>
      <Typography component='p'>Enter Student Academy Detail's(*)</Typography>
      <Divider sx={{ marginBottom: '40px' }}></Divider>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Registration Number'
            variant='outlined'
            name='registrationNo'
            value={values.registrationNo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Class Roll No'
            variant='outlined'
            name='classRollNo'
            value={values.classRollNo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>
              Class Admitted To
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={values.classAdmittedTo}
              label='Class Admitted To'
              name='classAdmittedTo'
              onChange={handleChange}
            >
              <MenuItem disabled>Choose...</MenuItem>
              {['jss1', 'jss2', 'jss3', 'ss1', 'ss2', 'ss3'].map(
                (cls, index) => {
                  return (
                    <MenuItem key={index} value={cls}>
                      {cls}
                    </MenuItem>
                  )
                }
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Session'
            variant='outlined'
            name='session'
            value={values.session}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Term'
            variant='outlined'
            name='term'
            value={values.term}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default StudentSchoolDetailForm
