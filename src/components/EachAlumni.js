import React ,{useState} from 'react'
import '../../src/static/css/cards.css';
import {url} from '../../src/mainUrl';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Box from '@mui/material/Box';
import {  Button } from 'react-bootstrap';
import {  DialogContent, TextField } from "@mui/material";
import {Typography} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EachAlumni({input,alumni,loading}) {
      const [mail, setSendMail] = useState({
        name: "",
        email: "",
        message: "",
        subject:""
      });
      const [openeditStudentDetails, setopeneditStudentDetails] = useState(false);
      const [sendcontact,setContact]=useState('');
      const [sendMailLoad, setsendMailLoad] = useState(false);

      const handleCloseopeneditStudentDetails = () => {
        setopeneditStudentDetails(false);
        setSendMail("");
      };
      const handleClickopeneditStudentDetails = (oncamp) => {
          setopeneditStudentDetails(true);  
          setContact(oncamp);            
      };
      
  const handleChange = (prop) => (event) => {
    setSendMail({ ...mail, [prop]: event.target.value });
  };
  const handleSendContact=()=>{
    setsendMailLoad(true);
    fetch(
      url +
        "auth/alumni/send_email_alumni/{email}?a_email="+sendcontact.a_email+"&s_name="+mail.name+"&s_email="+mail.email+"&subject="+mail.subject+"&body="+mail.message,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setsendMailLoad(false);
        setopeneditStudentDetails(false);
        toast(data.message);
        setSendMail("");
      });
  }
    if(loading)
    {
        return <h2>Loading...</h2>
    }
   
    return (
    <div class="container" id="alumni">
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
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
                      label="Subject"
                      id="fullWidth"
                      placeholder="Enter your email"
                      style={{ marginBottom: "1rem" }}
                      value={mail.subject}
                      onChange={handleChange("subject")}
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
                        onClick={handleSendContact}
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
                    <h2>{oncamp.item?oncamp.item.a_name.slice(0,1):oncamp.a_name.slice(0,1)}</h2>
                    <h3>{oncamp.item?oncamp.item.a_name:oncamp.a_name}</h3>
                    <h3>{oncamp.item?oncamp.item.a_cname:oncamp.a_cname}</h3>
                    <p>{oncamp.item?oncamp.item.branch:oncamp.branch}</p>
                    <p>{oncamp.item?oncamp.item.passout:oncamp.passout} Passout</p>
                    <button onClick={()=>{handleClickopeneditStudentDetails(oncamp.item?oncamp.item:oncamp)}}>Contact</button>
                </div>
                </div>
            </div></> );
            })}
    </div>
  )
}

export default EachAlumni