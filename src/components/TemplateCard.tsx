import React from "react";
import Grid from "@mui/material/Grid";
import "./TemplateCard.css";
import Button from "@mui/material/Button";
import TrashIcon from "../statis/icons/TrashIcon";
import IconButton from "@mui/material/IconButton";
import EditCardIcon from "../statis/icons/EditCardIcon";

type CardProps = {
  id: string;
  text: string;
};

function TemplateCard(props: CardProps) {
  return (
    <Grid item md={6} lg={6} xl={4}>
      <div className="tmpCard">
        <div className="cardTop">
          <IconButton aria-label="delete">
            <TrashIcon scale={24}/>
          </IconButton>

          <h3>Draft #{props.id}</h3>
          <IconButton>
            <EditCardIcon scale={24}/>
          </IconButton>
        </div>
        <p className="overflowText">{props.text}</p>
      </div>
    </Grid>
  );
}

export default TemplateCard;
