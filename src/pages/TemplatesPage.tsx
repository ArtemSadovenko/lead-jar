import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import TemplateCard from "../components/TemplateCard";
import { text } from "stream/consumers";
import PlusIcon from "../statis/icons/PlusIcon";
import "./TemplatePage.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { InputBase } from "@mui/material";
let content = [
  {
    id: "1",
    text: "text",
  },
  {
    id: "2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi.",
  },
  {
    id: "3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi.",
  },
  {
    id: "4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi.",
  },
  {
    id: "5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi.",
  },
  {
    id: "6",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, assumenda repudiandae architecto, voluptate placeat non quos tempora minus ut mollitia accusantium praesentium cupiditate molestias corporis nostrum vitae cum ea sequi.",
  },
];

function TemplatesPage() {
  const [isDialogOpened, SetIsDialogOpened] = useState(true);
  const [dialogContent, SetContent] = useState("");
  const [isDialogEditing, SetIsDialogEditing] = useState(false)
  

  return (
    <div>
      <Grid container spacing={3} sx={{ minWidth: "70vw" }} zeroMinWidth>
        <SidePanel />

        <Dialog
          open={isDialogOpened}
          onClose={() => {
            if (dialogContent) {
              let id = (
                parseInt(content[content.length - 1].id) + 1
              ).toString();
              content.push({ id: id, text: dialogContent });
            }
            SetIsDialogEditing(false)
            SetContent("")
          }}
        >
          <DialogTitle id={"2"}>Home</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <textarea
                style={{
                  resize: "none",
                  border: "solid 1px",
                  width: "40vw",
                  height: "40vh",
                  borderRadius: "10px",
                }}
                onChange={(event) => {
                  SetContent(event.target.value);
                }}
                value={dialogContent}
              ></textarea>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              onClick={() => {
                if(dialogContent){
                  let id = (parseInt(content[content.length - 1].id) + 1).toString()
                  content.push({ id: id, text: dialogContent });                  

                }

                SetIsDialogOpened(false);
              }}
            >
              Close
            </Button>
            {/* <Button
              onClick={() => {
                if (dialogContent) {
                  let id: string
                  if(hardCodeId.length>1){
                    id = hardCodeId
                  }
                  else{
                    id = (parseInt(content[content.length - 1].id) + 1).toString()
                    SetHardCodeId(id) 
                  }




                  // let id = (hardCodeId.length>1?hardCodeId: 
                  // (
                  //   parseInt(content[content.length - 1].id) + 1
                  // ).toString()) ;
                  // id = hardCodeId
                  content.push({ id: id, text: dialogContent });
                }
              }}
            >
              save
            </Button> */}
          </DialogActions>
        </Dialog>

        <Grid item md={9}>
          <TopBar />
          <Container className="content">
            <Grid container>
              <Grid item md={6} lg={6}>
                <div
                  className="newTmp"
                  style={{
                    width: "30vp",
                    height: "25vh",
                    // backgroundColor: "#FFFFFF",
                    margin: "12px 12px 6px 12px",
                    padding: "6px 12px 6px 12px",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    SetIsDialogOpened(true);
                    SetIsDialogEditing(true)
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}> */}
                    <PlusIcon scale={30} />
                    {/* </div> */}
                    <h3 style={{ color: "#757C89" }}>New Teamplate</h3>
                  </div>
                </div>
              </Grid>

              {content.map((draft) => (
                <TemplateCard id={draft.id} text={draft.text}></TemplateCard>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default TemplatesPage;
