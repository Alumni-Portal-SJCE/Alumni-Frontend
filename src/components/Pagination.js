// import React from 'react'


// const Pagination = ({postsPerPage, totalPosts,paginate}) => {
//     const pageNumbers = []
//     console.log(postsPerPage, totalPosts);
//     for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
//         pageNumbers.push(i)
//     }
//   return (
//       <div>
//     <nav className="page navigation">
//         <ul className="flex list-style-none">
//             {pageNumbers?.map(number => 
//                 <li key={number} className="page-item">
//                     <a onclick={()=>paginate(number)} href="!#" className="page-link">
//                         {number}
//                     </a>
//                 </li>
//             )}
//         </ul>
//     </nav>
//     </div>
//   )
// }



// export default Pagination

// import React, { useEffect, useState } from "react";

// const Pagination = ({
//   postsPerPage,
//   totalPosts,
//   paginate,
//   currentPage,
// }) => {
//   const [showPrev, setPrev] = useState(false);
//   const [showNext, setNext] = useState(false);
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const prev = () => (
//     <a onClick={() => paginate(currentPage - 1)} href="#alumni">
//       Prev
//     </a>
//   );
//   const next = () => (
//     <a onClick={() => paginate(currentPage + 1)} href="#alumni">
//       Next
//     </a>
//   );

//   useEffect(() => {
//     if (currentPage - 1 > 0) {
//       setPrev(true);
//     } else {
//       setPrev(false);
//     }

//     if (currentPage !== pageNumbers.length) {
//       setNext(true);
//     } else {
//       setNext(false);
//     }
//   }, [currentPage, pageNumbers.length]);

//   const liRender = number => (
//     <li key={number} className="page-item">
//       <a onClick={() => paginate(number)} href="#alumni" className="page-link">
//         {number}
//       </a>
//     </li>
//   );

//   return (
//     <nav>
//       {showPrev && prev()}
//       <ul className="pagination">
//         {pageNumbers.map(number => {
//           if (currentPage === number) {
//             return (
//               <li key={number} className="page-item">
//                 <button
//                   onClick={() => paginate(number)}
//                   className="page-link  page-item-active"
//                 >
//                   {number}
//                 </button>
//               </li>
//             );
//           }

//           return liRender(number);
//         })}
//       </ul>
//       {showNext && next()}
//     </nav>
//   );
// };

// export default Pagination;

import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {


  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'> {currentPage * postsPerPage - 9} </span>
          to
          <span className='font-medium'> {Math.min(currentPage * postsPerPage,totalPosts)} </span>
          of
          <span className='font-medium'> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md '
          aria-label='Pagination'
        >{currentPage>1?(<a
            onClick={() => {
              paginateBack();
            }}
            href='#alumni'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Previous</span>
          </a>
        ):null}
        {currentPage*9<=totalPosts?(
          <a
            onClick={() => {
              paginateFront();
            }}
            href='#alumni'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Next</span>
          </a>
          ):null}
        </nav>
      </div>
    </div>
  );
}