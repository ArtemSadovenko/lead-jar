import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import SidePanel from '../components/SidePanel'
import TopBar from '../components/TopBar'
import { Role, UserResponse } from '../network/Leads'
import LeadCard from '../components/LeadCard'

const users: UserResponse[] = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    role: Role.ADMIN
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Smith',
    email: 'jane.smith@example.com',
    role: Role.SALES_MANAGER
  },
  {
    id: 3,
    firstname: 'Michael',
    lastname: 'Johnson',
    email: 'michael.johnson@example.com',
    role: Role.LEAD_GENERATOR
  },
  {
    id: 4,
    firstname: 'Emily',
    lastname: 'Davis',
    email: 'emily.davis@example.com',
    role: Role.SALES_MANAGER
  }
];





function TeamPage() {




  return (
    
    
    <Container maxWidth="lg" style={{padding: 0}}>
    <Grid container spacing={3} sx={{padding: 0}}>
      <SidePanel/>

      <Grid item md={9}>
        <TopBar/>
        <Container className='content'>
          <Grid container>
          {users.map((user) => <LeadCard user={user}/>)}
          </Grid>
        </Container>
      </Grid>  
    </Grid>
  </Container>

  )
}

export default TeamPage
