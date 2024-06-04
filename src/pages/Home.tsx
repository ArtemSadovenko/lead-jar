import React from 'react'
import "./Home.css"
import AiAssistantIcon from '../statis/icons/AiAssistantIcon'
import BlogIcon from '../statis/icons/BlogIcon'
import TeamTreeIcon from '../statis/icons/LeadsIcon'
import TeamIcon from '../statis/icons/TeamIcon'
import TemplateIcon from '../statis/icons/TemplateIcon'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className='oot'>
      <div className='chooseLine'>
        
        <Link to="/dashboard/ai-assistant">
        <div className='path'>
          <AiAssistantIcon scale = {80}/>
          <h5 style={{color:'white'}}>AI-ASSISTANT</h5>
        </div>
        </Link>

        <Link to="/dashboard/blog">
        <div className='path'>
          <BlogIcon scale={80}/>
          <h5 style={{color:'white'}}>BLOG</h5>
        </div>
        </Link>

        <Link to="/dashboard/leads">
        <div className='path'>
          <TeamTreeIcon scale={80}/>
          <h5 style={{color:'white'}}>LEADS</h5>
        </div>
        </Link>
      
        <Link to="/dashboard/team">
        <div className='path'>
          <TeamIcon scale={80}/>
          <h5 style={{color:'white'}}>TEAM</h5>
        </div>
        </Link>


        <Link to="/dashboard/templates">
        <div className='path'>
          <TemplateIcon scale={80}/>
          <h5 style={{color:'white'}}>TEAMPLATES</h5>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Home
