import React, { useEffect,useState } from 'react'
import {url} from '../../src/mainUrl';
import '../../src/static/css/cards.css';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import {  DialogContent, TextField } from "@mui/material";
import {Typography} from "@mui/material";
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import InfiniteScroll from 'react-infinite-scroll-component';
import EachAlumni from './EachAlumni';
import Pagination from './Pagination';

function AllAlumniDisplay() {
    const [alumni,setAlumni]=useState([]);
    const [loading, setLoader] = useState(true);
    const[currentPage,setCurrentPage]=useState(1);
    const[postsPerPage,setPostPerPage]=useState(9);

    useEffect(() => {
        fetch(url + "auth/get_all_alumni_details", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setAlumni(data);
            

          }).then(()=>{
            setLoader(false);
          });
      }, []);
      const indexOfLastPost =currentPage*postsPerPage;
      const indexOfFirstPost=indexOfLastPost-postsPerPage;
      const currentPosts=alumni.slice(indexOfFirstPost,indexOfLastPost);
      const paginate=(pageNumber)=>setCurrentPage(pageNumber);
      const [openeditStudentDetails, setopeneditStudentDetails] = useState(false);
      const [sendcontact,setContact]=useState('');
      const paginateFront = () => setCurrentPage(currentPage + 1);
        const paginateBack = () => setCurrentPage(currentPage - 1);
      const handleCloseopeneditStudentDetails = () => {
        setopeneditStudentDetails(false);
      };
      const handleClickopeneditStudentDetails = (oncamp) => {
          setopeneditStudentDetails(true);  
          setContact(oncamp);  
      };
      const [mail, setSendMail] = useState({
        name: "",
        email: "",
        message: ""
      });
    
      
  const handleChange = (prop) => (event) => {
    setSendMail({ ...mail, [prop]: event.target.value });
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
        emailjs.init('zmxtLJK_mxc708L5m');
    }, [])

   
  return (
    <div>
            
         <h2 class="headerOur">Our Alumni</h2>
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
          <div className='email-form container'>
				<h2>Get in touch</h2>
				<Form
					onSubmit={async event => {
						event.preventDefault();
						setSuccess('');
						setEmail('');

						try {
							await emailjs.send('service_dhf2prr', 'template_in3nfs6', {
								from_name: name,
								from_email: email,
								reply_to: 'placementsjce2022@gmail.com',
								message: message,
							});
							setSuccess("We've received your email!");
							setEmail('');
							setName('');
							setMessage('');
						} catch (ex) {
							setError('An error occurred, please try again!'+ex);
						}
					}}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							value={name}
							onChange={e => setName(e.currentTarget.value)}
							type='text'
							placeholder='Enter name'
							required
						/>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							value={email}
							onChange={e => setEmail(e.currentTarget.value)}
							type='email'
							placeholder='Enter email'
							required
						/>
					</Form.Group>

					<Form.Group controlId='message'>
						<Form.Label>Message</Form.Label>
						<Form.Control
							value={message}
							onChange={e => setMessage(e.currentTarget.value)}
							as='textarea'
							rows={3}
							required
						/>
					</Form.Group>
					{success && <p className='success'>{success}</p>}
					{error && <p className='error'>{error}</p>}

					<Button variant='success' type='submit' class="submitt">
						Submit
					</Button>
				</Form>
			</div>
          </DialogContent>
          
        </Dialog><div class="x">
        
            <div class="container">
            
            <EachAlumni alumni={currentPosts} loading={loading} />
            
            </div>
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={alumni.length} paginateBack={paginateBack}
        paginateFront={paginateFront} currentPage={currentPage} />
           
    </div>
  )
}

export default AllAlumniDisplay