import React ,{useState} from 'react'
import '../../src/static/css/cards.css';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Box from '@mui/material/Box';
import { Form, Button } from 'react-bootstrap';
import {  DialogContent, TextField } from "@mui/material";
import {Typography} from "@mui/material";

function EachAlumni({alumni,loading}) {
      const [mail, setSendMail] = useState({
        name: "",
        email: "",
        message: ""
      });
      const [openeditStudentDetails, setopeneditStudentDetails] = useState(false);
      const [sendcontact,setContact]=useState('');

      const handleCloseopeneditStudentDetails = () => {
        setopeneditStudentDetails(false);
      };
      const handleClickopeneditStudentDetails = (oncamp) => {
          setopeneditStudentDetails(true);  
          setContact(oncamp);  
      };
      
  const handleChange = (prop) => (event) => {
    setSendMail({ ...mail, [prop]: event.target.value });
  };
    if(loading)
    {
        return <h2>Loading...</h2>
    }
    return (
    <div class="container" id="alumni">
    <Dialog
          fullScreen
          open={openeditStudentDetails}
          onClose={handleCloseopeneditStudentDetails}
          // TransitionComponent={Transition}
        //   sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}
        >
          <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseopeneditStudentDetails}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Connect with {sendcontact.a_name}
            </Typography>
          </Toolbar>
        </AppBar>
          <DialogContent>
          <TextField
                      fullWidth
                      label="Full Name"
                      id="fullWidth"
                      placeholder=""
                      style={{ marginBottom: "1rem" }}
                      value={mail.name}
                      onChange={handleChange("name")}
                    />
            <TextField
                      fullWidth
                      label="Email"
                      id="fullWidth"
                      placeholder="Enter your email"
                      style={{ marginBottom: "1rem" }}
                      value={mail.email}
                      onChange={handleChange("email")}
                    />
                <TextField
                      fullWidth
                      label="Message"
                      id="fullWidth"
                      placeholder="Enter your queries (don't ask questions which are confidential)"
                      style={{ marginBottom: "1rem" }}
                      value={mail.message}
                      multiline
                      rows={6}
                      onChange={handleChange("message")}
                    />
                    <Box sx={{justifyContent: "center"}}>
                        <Button
                        variant="contained"
                        style={{  }}
                        // onClick={handleFeedbackSubmit}
                        disabled={loading ? true : false}
                    >
                        SEND
                    </Button>
                    </Box>
                    
          </DialogContent>
          
        </Dialog>
    {alumni?.map(function (oncamp, i) {
                return (
            <>            
    <div class="card">
                <div class="box">
                <div class="content">
                    <h2>{oncamp.a_name.slice(0,1)}</h2>
                    <h3>{oncamp.a_name}</h3>
                    <h3>{oncamp.a_cname}</h3>
                    <p>{oncamp.branch}</p>
                    <p>{oncamp.passout} Passout</p>
                    <button onClick={()=>{handleClickopeneditStudentDetails(oncamp)}}>Contact</button>
                </div>
                </div>
            </div></> );
            })}
    </div>
  )
}

export default EachAlumni