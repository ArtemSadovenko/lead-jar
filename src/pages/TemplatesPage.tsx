import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import SidePanel from '../components/SidePanel'
import TopBar from '../components/TopBar'
import TemplateCard from '../components/TemplateCard'
import { text } from 'stream/consumers'




let content = [
  {
    id:"1",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi."
  },
  {
    id:"2",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi."
  },
  {
    id:"3",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi."
  },
  {
    id:"4",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi."
  },
  {
    id:"5",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi."
  },
  {
    id:"6",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi."
  },
]


function TemplatesPage() {
  return (
    
    
    <div>
    <Grid container spacing={3} sx={{padding: 0}} zeroMinWidth>
      <SidePanel/>

      <Grid item md={9} >
        <TopBar/>
        <Container className='content'>
          <Grid container>
            {
              content.map((draft) =>  (
                <TemplateCard id={draft.id} text={draft.text}></TemplateCard>
              )

              )
            }
          </Grid>
        </Container>
      </Grid>  
    </Grid>
  </div>

  )
}

export default TemplatesPage
