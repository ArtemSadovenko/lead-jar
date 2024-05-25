import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import SidePanel from '../components/SidePanel'
import TopBar from '../components/TopBar'
import NavButton from '../components/NavButton'

function BlogPage() {
  
  return (

    <Container maxWidth="lg" style={{padding: 0}}>
    <Grid container spacing={3} sx={{padding: 0}}>
      <SidePanel/>

      <Grid item md={9}>
        <TopBar/>
        <NavButton name='navi'></NavButton>
      </Grid>  
    </Grid>
  </Container>
  )
}

export default BlogPage
