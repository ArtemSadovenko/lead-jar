import React from "react";
import Grid from "@mui/material/Grid";
import "./TemplateCard.css";
import Button from "@mui/material/Button";
import TrashIcon from "../statis/icons/TrashIcon";
import IconButton from "@mui/material/IconButton";
import EditCardIcon from "../statis/icons/EditCardIcon";
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'

type CardProps = {
  id: string;
  text: string;
};

function TemplateCard(props: CardProps) {
  return (

    <Grid item md={6} lg={6}>
          {/* <Dialog open={true} >
          <DialogTitle id={"2"}>
            Home
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog> */}

      <div className="tmpCard">
        <div className="cardTop">
          <IconButton aria-label="delete">
            <TrashIcon scale={24}/>
          </IconButton>

          <h3>Draft #{props.id}</h3>
          <IconButton>
            <EditCardIcon scale={32}/>
          </IconButton>
        </div>
        <p className="overflowText">{props.text}</p>
      </div>
    </Grid>
  );
}

export default TemplateCard;
