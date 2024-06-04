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
            <Grid item md={6} lg={6}>
              <div style={{
                    width: "30vp",
                    height: "25vh",
                    backgroundColor: "#FFFFFF",
                    margin: "12px 12px 6px 12px",
                    padding: "6px 12px 6px 12px",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
              }}>
                <h1>Hui</h1>
              </div>
            </Grid>
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
