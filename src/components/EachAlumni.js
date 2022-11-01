import React from 'react'
import '../../src/static/css/cards.css';

function EachAlumni({alumni,loading}) {
    if(loading)
    {
        return <h2>Loading...</h2>
    }
    return (
<div class="container" id="alumni">
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
                    {/* <button onClick={()=>{handleClickopeneditStudentDetails(oncamp)}}>Contact</button> */}
                </div>
                </div>
            </div></> );
            })}
    </div>
  )
}

export default EachAlumni