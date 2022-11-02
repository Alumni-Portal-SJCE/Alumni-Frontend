import React, { useEffect,useState } from 'react'
import {url} from '../../src/mainUrl';
import '../../src/static/css/cards.css';
import emailjs from '@emailjs/browser';
import InfiniteScroll from 'react-infinite-scroll-component';
import EachAlumni from './EachAlumni';
import Pagination from './Pagination';
import { TextField } from '@mui/material';
import Fuse from 'fuse.js'

function AllAlumniDisplay() {
    var [alumni,setAlumni]=useState([]);
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
         
      const [inputText, setInputText] = useState("");
      let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
      const options = {
      //  includeScore: true,
       keys: ['a_name', 'a_cname']
     }
     const fuse = new Fuse(alumni, options)

     const result = fuse.search(inputText, {limit: 20})
      const indexOfLastPost =currentPage*postsPerPage;
      const indexOfFirstPost=indexOfLastPost-postsPerPage;
      const currentPosts=alumni.slice(indexOfFirstPost,indexOfLastPost);
      const paginate=(pageNumber)=>setCurrentPage(pageNumber);
      const paginateFront = () => setCurrentPage(currentPage + 1);
         const paginateBack = () => setCurrentPage(currentPage - 1);

      //    const filteredData = alumni.filter((el) => {
      //     //if no input the return the original
      //     // if (input === '') {
      //     //     return el;
      //     // }
      //     // //return the item which contains the user input
      //     // else {
      //     //     return el.text.toLowerCase().includes(input)
      //     // }
      //     console.log(el);
      // })
  return (
    <div>
          <h3 style={{marginTop:'5vh'}}>Our Alumni</h3>
          <div className="main">
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={inputHandler}
            fullWidth
            label="Search by name or company"
          />
        </div>
        </div>                
        {result.length?(<h5 style={{marginTop:'5vh'}}>Top 20 search results....</h5>):(null)}

          <div class="x">

            <div class="container">
            {result.length?(<EachAlumni  alumni={result} loading={loading} />):(<EachAlumni  alumni={currentPosts} loading={loading} />)}
            
            
            </div>
            </div>
            {!result.length?(<Pagination postsPerPage={postsPerPage} totalPosts={alumni.length} paginateBack={paginateBack} paginateFront={paginateFront} currentPage={currentPage} />):null}
       
           
    </div>
  )
}

export default AllAlumniDisplay