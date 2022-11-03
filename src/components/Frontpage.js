import React,{lazy,Suspense} from 'react'
import '../static/css/landing-page.min.css'
import '../static/vendor/bootstrap/css/bootstrap.min.css'
import '../static/vendor/simple-line-icons/css/simple-line-icons.css'
import '../static/vendor/fontawesome-free/css/all.min.css'
import JSSLogo from '../static/img/jss.png'
// import AllAlumniDisplay from './AllAlumniDisplay'
const AllAlumniDisplay=lazy(()=>import('./AllAlumniDisplay'))
function frontpage() {

  return (
    <div>


    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <title>StudNet</title>

    
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css"/>

    <header class="masthead text-white text-center">
        <div class="container">
        <div class="row">
            <div class="col-xl-9 mx-auto" >
            <img alt="JSS_Logo" src={JSSLogo}/><h2 class="mb">JSS STU Alumni Portal </h2>
            <h3>Connect with Alumni</h3>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-7 mx-auto">
            {/* <form action="" method="POST">
                <div class="form-row">
                <div class="col-sm-6 col-md-4">
                    <a href="./register" class="btn btn-primary sign-up"> Signup<i class="fas fa-user-plus ml-3"></i></a>
                </div> 
                <div class="col-sm-6 col-md-4 offset-md-3 pl-5">
                    <a href="./login" class="btn btn-primary log-in">Login<i class="fas fa-sign-in-alt ml-3"></i></a>
                </div>
                </div>
            </form> */}
            </div>
        </div>
    </div>
  </header>
  {/* <section class="features-icons bg-light text-center ">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-star m-auto text-primary"></i>
            </div>
            <h3>Become known!!</h3>
            <p class="lead mb-0">Post a question, answer question, help your college mates! Build connections, make projects, help each other and much more!!</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-envelope m-auto text-primary"></i>
            </div>
            <h3>Updates</h3>
            <p class="lead mb-0">Share and receive updates regarding internships, college fests and other events</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-graduation m-auto text-primary"></i>
            </div>
            <h3>Help your juniors!</h3>
            <p class="lead mb-0">Share your experineces about internships, job-offers, college-life</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}


  <Suspense fallback={<div>Loading...</div> }>
    <AllAlumniDisplay/>

  </Suspense>
  

  <section class="showcase">
    <div class="container-fluid p-0">
      <div class="row no-gutters">

        <div class="col-lg-6 order-lg-2 text-white showcase-img svg-grid-1" ></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Grab those opportunities!!</h2>
          <p class="lead mb-0">Utilise the opportunities to explore your interests</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img svg-grid-2"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Improve Soft skills</h2>
          <p class="lead mb-0">Get to know about upcoming debates, MUNs, cultural fests, etc and participate develop your personality and be a better communicator</p>
        </div>
      </div>
      
    </div>
  </section>

  <section class="call-to-action text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h2 class="mb-4"> &copy; JSS STU Alumni Portal | {new Date().getFullYear()} </h2>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          
        </div>
      </div>
    </div>
  </section>

    

    </div>
  )
}

export default frontpage