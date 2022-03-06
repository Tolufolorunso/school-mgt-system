import React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Divider, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import countries from '../../../country'

const StudentParentContactDetailForm = ({
  classes,
  handleChange,
  values,
  setValues,
}) => {
  return (
    <div className={classes.formSection}>
      <Typography variant='h5' component='h4' className={classes.title}>
        Parent Contact Detail's
      </Typography>
      <Typography component='p'>
        Enter contact detail's of the student's parent.
      </Typography>
      <Divider sx={{ marginBottom: '40px' }}></Divider>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type='email'
            id='outlined-basic'
            label='Email'
            variant='outlined'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            type='number'
            id='outlined-basic'
            label='Phone Number'
            variant='outlined'
            name='phoneNumber'
            value={values.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Address'
            variant='outlined'
            name='address_Line_1'
            value={values.address_Line_1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='City'
            variant='outlined'
            name='city'
            value={values.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='State'
            variant='outlined'
            name='state'
            value={values.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Postal Code'
            variant='outlined'
            name='postalCode'
            value={values.postalCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Country</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={values.country}
              label='Country'
              name='country'
              onChange={handleChange}
            >
              {countries.map((country, index) => {
                return (
                  <MenuItem key={index} value={country.label}>
                    {country.label}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}

export default StudentParentContactDetailForm
