import React from 'react'
import Grid from '@mui/material/Grid'

const PageNavigation = ({ url }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={3} sx={{ bgcolor: '#00ff00' }}>
        {url}
      </Grid>
      <Grid item md={9} sx={{ bgcolor: '#ff0000' }}>
        hi
      </Grid>
    </Grid>
  )
}

export default PageNavigation
