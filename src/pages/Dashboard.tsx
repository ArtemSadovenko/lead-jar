import React from 'react'
import SidePanel from '../components/SidePanel'
import { Container, Grid } from '@mui/material'

function Dashboard() {
  console.log("Dash")
  return (
    <Container maxWidth="lg" style={{paddingLeft: 0}}>
      <Grid container spacing={3} sx={{paddi: 0}}>
      <SidePanel/>

      <Grid item md={9}>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      <h1>dash</h1>
      
    
      </Grid>  
      </Grid>
    </Container>
  )
}

export default Dashboard
