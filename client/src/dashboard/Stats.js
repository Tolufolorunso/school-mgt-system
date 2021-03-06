import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
// import Box from '@mui/material/Box'
import { Breadcrumbs, TotalStatsCard } from '../common'

const Stats = () => {
  return (
    <>
      <Breadcrumbs where='Home' />
      <Container>
        <Grid container spacing={2}>
          <TotalStatsCard color='red' />
          <TotalStatsCard />
          <TotalStatsCard />
          <TotalStatsCard />
          <TotalStatsCard />
        </Grid>
      </Container>
    </>
  )
}

export default Stats
