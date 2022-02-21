import React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Divider, Typography } from '@mui/material'

const ParentDetailForm = ({ classes, handleChange, values }) => {
  return (
    <div className={classes.formSection}>
      <Typography variant='h5' component='h4' className={classes.title}>
        Parent Detail's
      </Typography>
      <Typography component='p'>
        Enter parent detail's of the student.
      </Typography>
      <Divider sx={{ marginBottom: '40px' }}></Divider>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label="Father's Name"
            variant='outlined'
            name='fathersName'
            value={values.fathersName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label="Father's Location"
            variant='outlined'
            name='fathersLocation'
            value={values.fathersLocation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label="Father's Occupation"
            variant='outlined'
            name='fathersOccupation'
            value={values.fathersOccupation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label="Mother's Name"
            variant='outlined'
            name='mothersName'
            value={values.mothersName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label="Mother's Location"
            variant='outlined'
            name='mothersLocation'
            value={values.mothersLocation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id='outlined-basic'
            label="Mother's Occupation"
            variant='outlined'
            name='mothersOccupation'
            value={values.mothersOccupation}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ParentDetailForm
