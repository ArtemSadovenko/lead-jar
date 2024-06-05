import { Box, Typography, Grid, Container, Button } from '@mui/material'
import React from 'react'
import LeadsIcon from '../statis/icons/LeadsIcon'
import { Link } from 'react-router-dom'
import AiAssistantIcon from '../statis/icons/AiAssistantIcon'
import BlogIcon from '../statis/icons/BlogIcon'
import TemplateIcon from '../statis/icons/TemplateIcon'
import TeamIcon from '../statis/icons/TeamIcon'
import './SidePanel.css';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function SidePanel() {
  return (
    
    <Grid item md={3} >
    <Container maxWidth="lg" className="SidePanel" sx={{paddingTop: 4}}>
      <ul style={{margin: 0}}>
        <li>
          <Link to={"/dashboard/ai-assistant"} className='no-hoover-link'>
            <AiAssistantIcon scale = {24}/>
            <div >Ai Assistant</div>
          </Link>
        </li>
        <li>

          <Link  to={"/dashboard/leads"} className='no-hoover-link'>
            <LeadsIcon scale={24}/>
            <div>Leads</div>
          </Link>
          
        </li>
        <li>
          <Link to={"/dashboard/blog"} className='no-hoover-link'>
            <BlogIcon scale = {24}/>
            <div>Blog</div>
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/templates"} className='no-hoover-link'>
            <TemplateIcon scale = {24}/>
            <div>Templates</div>
          </Link>
        </li>
        <li style={{marginBottom: "25vh"}}>
          <Link to={"/dashboard/team"} className='no-hoover-link'>
            <TeamIcon scale = {24}/>
            <div>Team</div>
          </Link>
        </li>

        <li>

          <Link  to={"/login"} className='no-hoover-link' >
            <LogoutOutlinedIcon sx={{color: "white", verticalAlign:"middle"}}/>
            <div>Log Out</div>
          </Link>
          
        </li>
      </ul>
    </Container>

    </Grid>
  
  )
}

export default SidePanel
