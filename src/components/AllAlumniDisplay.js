import React, { useEffect,useState } from 'react'
import {url} from '../../src/mainUrl';
import '../../src/static/css/cards.css';
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
      const paginateFront = () => setCurrentPage(currentPage + 1);
         const paginateBack = () => setCurrentPage(currentPage - 1);
   
  
 
  return (
    <div>
          <h3 style={{marginTop:'5vh'}}>Our Alumni</h3>
          <div class="x">
        
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