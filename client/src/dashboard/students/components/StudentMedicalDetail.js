import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const StudentMedicalDetail = ({ isEdit, values, handleChange, setValues }) => {
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
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
            disabled={isEdit}
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
            disabled={isEdit}
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
          disabled={isEdit}
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
          disabled={isEdit}
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
            disabled={isEdit}
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
          disabled={isEdit}
        />
      </Grid>
    </Grid>
  )
}

export default StudentMedicalDetail
