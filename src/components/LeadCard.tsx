import React from 'react'
import {  Role, UserResponse, RoleUINames } from '../network/Leads'
import Card, { CardContent } from '@mui/material'
import Grid from '@mui/material/Grid'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


type TeamMemberProps=  {
    user: UserResponse
}

function LeadCard(props: TeamMemberProps) {
  return (
    <Grid item md={3}>
        <div style={{
            width: "12.5rem",
            height: "17rem",
            backgroundColor: "white",
            margin: "8px 16px 8px 16px ",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            textAlign: "center",
            borderRadius: "10px"
        }}>
            <AccountCircleIcon sx={{width: "80px", height: "80px"}}/>
            <h4 style={{marginTop: "12px", marginBottom: "2px"}}>{props.user.firstname}&nbsp;{props.user.lastname}</h4>
            <h5 style={{marginTop: "6px", marginBottom: "2px", color: "gray"}}>{RoleUINames[props.user.role]}</h5>
            <h6 style={{marginTop: "6px", marginBottom: "2px", color: "gray"}}>{props.user.email}</h6>
            <div
                style={{
                    backgroundColor: "white",
                    margin: "8px 16px 8px 16px ",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "row",
                    textAlign: "center",
                    borderRadius: "10px"
                }}
            >
                <button style={{
                    backgroundColor: "#F4E8C1",
                    border: "none",
                    borderRadius: "10px",
                    color: "#D06F23",
                    padding: "8px 8px 8px 8px",
                    margin: "8px 8px 8px 8px"
                }}
                >Statistics</button>
                <button
                    style={{
                        backgroundColor: "#D3EDE7",
                        border: "none",
                        borderRadius: "10px",
                        color: "#46AE8F",
                        padding: "8px 8px 8px 8px"
                    }}
                >Info
                </button>
            </div>
        </div>
    </Grid>
  )
}

export default LeadCard
