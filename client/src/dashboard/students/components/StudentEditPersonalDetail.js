import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const StudentEditPersonalDetail = ({
  isEdit,
  values,
  handleChange,
  setValues,
}) => {
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='outlined-basic'
          label='Firstname'
          variant='outlined'
          name='firstname'
          value={values.firstname}
          onChange={handleChange}
          disabled={isEdit}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='outlined-basic'
          label='Lastname'
          variant='outlined'
          name='lastname'
          value={values.lastname}
          onChange={handleChange}
          disabled={isEdit}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={values.gender}
            label='Gender'
            name='gender'
            onChange={handleChange}
            disabled={isEdit}
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Category</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={values.category}
            label='Category'
            name='category'
            onChange={handleChange}
            disabled={isEdit}
          >
            <MenuItem value='jss'>Jss</MenuItem>
            <MenuItem value='sss'>Sss</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label='Date Of Birth'
            value={values.dateOfBirth}
            name='dateOfBirth'
            onChange={(newValue) => {
              setValues({ ...values, dateOfBirth: newValue })
            }}
            renderInput={(params) => (
              <TextField fullWidth {...params} disabled={isEdit} />
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label='Date Of Admission'
            value={values.dateOfAdmission}
            name='dateOfAdmission'
            onChange={(newValue) => {
              setValues({
                ...values,
                dateOfAdmission: newValue,
              })
            }}
            renderInput={(params) => (
              <TextField fullWidth {...params} disabled={isEdit} />
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Religion</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={values.religion}
            label='Religion'
            name='religion'
            onChange={handleChange}
            disabled={isEdit}
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
    </Grid>
  )
}

export default StudentEditPersonalDetail
