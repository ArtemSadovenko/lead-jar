import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import SidePanel from '../components/SidePanel'
import TopBar from '../components/TopBar'

function TeamPage() {
  return (
    
    
    <Container maxWidth="lg" style={{padding: 0}}>
    <Grid container spacing={3} sx={{padding: 0}}>
      <SidePanel/>

      <Grid item md={9}>
        <TopBar/>
        <Container className='content'>
          
        </Container>
      </Grid>  
    </Grid>
  </Container>

  )
}

export default TeamPage
