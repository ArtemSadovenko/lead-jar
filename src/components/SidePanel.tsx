import { Box, Typography, Grid, Container, Button } from '@mui/material'
import React from 'react'
import LeadsIcon from '../statis/icons/LeadsIcon'
import { Link } from 'react-router-dom'
import AiAssistantIcon from '../statis/icons/AiAssistantIcon'
import BlogIcon from '../statis/icons/BlogIcon'
import TemplateIcon from '../statis/icons/TemplateIcon'
import TeamIcon from '../statis/icons/TeamIcon'
import './SidePanel.css';

function SidePanel() {
  return (
    
    <Grid item md={3} >
    <Container maxWidth="lg" className="SidePanel" sx={{paddingTop: 4}}>
      <ul style={{margin: 0}}>
        <li>
          <Link to={"/"} className='no-hoover-link'>
            <AiAssistantIcon/>
            <div >Ai Assistant</div>
          </Link>
        </li>
        <li>
          
          <Link  to={"/"} className='no-hoover-link'>
            <LeadsIcon/>
            <div>Leads</div>
          </Link>
          
        </li>
        <li>
          <Link to={"/"} className='no-hoover-link'>
            <BlogIcon/>
            <div>Blog</div>
          </Link>
        </li>
        <li>
          <Link to={"/"} className='no-hoover-link'>
            <TemplateIcon/>
            <div>Templates</div>
          </Link>
        </li>
        <li>
          <Link to={"/"} className='no-hoover-link'>
            <TeamIcon/>
            <div>Team</div>
          </Link>
        </li>
      </ul>
    </Container>

    </Grid>
  
  )
}

export default SidePanel
