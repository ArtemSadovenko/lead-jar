import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

type SideButtonProps ={
    icon_src: string,
    title: string,
    to: string
}

function SidePanelButton(props: SideButtonProps) {
  return (
    <Link to={props.to}>
        <Button variant="text" color="primary" startIcon={props.icon_src}>
            <Typography >{props.title}</Typography>
        </Button>
    </Link>
  )
}

export default SidePanelButton
