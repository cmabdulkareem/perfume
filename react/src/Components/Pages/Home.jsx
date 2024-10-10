import React from 'react';

import logo from '../../assets/perfume1.png';
import cart from '../../assets/cart.png';
import search from '../../assets/search.png';
import profile from '../../assets/profile.png';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide4 from '../../assets/slide4.jpg';







import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';








const Home = () => {




  // const [products,setProducts]=useState([])
  // const navigate =useNavigate()
  // useEffect(()=>{
  //   axios 
  //     .get("http://localhost:8000/products")
  //     .then((res)=>{
  //       setProducts(res.data.message)
  //     })
  
  //     .catch((err)=>{
  //       console.log(err);
  //       })
  // },[])
  
 
  


  return (
  <div>
<nav className="navbar bg-body-tertiary" style={{ marginBottom: '0' }}>
  <div className="container-fluid d-none d-lg-flex justify-content-center bg-black">
    <span className="navbar-brand mb-0 h1 text-white">
      Get Extra 10% Discount, Use Code NOOR10
    </span>
  </div>
</nav>

<nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ marginTop: '0' }}>
  <div className="container-fluid">
    {/* Toggle button for mobile view */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Logo and Company Name (centered) */}
    <a className="navbar-brand mx-auto" href="#">
      <img src={logo} alt="Logo" width="80" style={{ backgroundColor: 'red' }} />
      AMIRAT SCENTS
    </a>

    {/* Navbar links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/product">
            PRODUCTS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            BRANDS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            SERVICE
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            CONTACT
          </a>
        </li>
      </ul>
    </div>

    {/* Cart, Search, and Profile icons on the right, hidden on mobile view */}
    <ul className="navbar-nav ms-auto d-flex flex-row d-none d-lg-flex">
      <li className="nav-item me-2">
        <a className="nav-link" href="#">
          <img
            src={search}
            alt="Search"
            width="25"
            height="25"
            className="d-inline-block"
          />
        </a>
      </li>
      <li className="nav-item me-2">
        <a className="nav-link" href="#">
          <img
            src={cart}
            alt="Cart"
            width="25"
            height="25"
            className="d-inline-block"
          />
        </a>
      </li>
      <li className="nav-item me-2">
        <a className="nav-link" href="#">
          <img
            src={profile}
            alt="Profile"
            width="25"
            height="25"
            className="d-inline-block"
          />
        </a>
      </li>
    </ul>
  </div>
</nav>

    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src={slide4} class="d-block w-100" alt="..."/>
    </div> */}
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div className="container">



<div className="text-center p-5">
  <h3>TOP PRODUCTS</h3>
  <hr style={{ width: '100px', margin: '10px auto', border: '2px solid black' }} />
</div>



<div class="row  row-cols-1 row-cols-md-4 g-4 ">
 
  <div class="col">
    <div class="card">
      <img src="dainty-diamond.jpg" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h6 class="card-title text-primary">Dainty Diamond</h6>
        <p class="card-text small-text" style={{fontSize:'14px'}}><del class ="me-2 text-secondary">$ 65</del><b>$ 45</b></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Toilette.jpg" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h6 class="card-title text-primary">Toilette</h6>
        <p class="card-text small-text" style={{fontSize:'14px'}}><del class ="me-2 text-secondary">$ 65</del><b>$ 45</b></p>
      </div>
    </div>
  </div>
  <div class="col">
    
    <div class="card">
      <img src="mojave-ghost.jpg" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h6 class="card-title text-primary">Mojave Ghost</h6>
        <p class="card-text small-text" style={{fontSize:'14px'}}><del class ="me-2 text-secondary">$ 65</del><b>$ 45</b></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Aoud-Queen-Roses.jpg" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h6 class="card-title text-primary ">Aoud Queen Roses</h6>
        <p class="card-text small-text" style={{fontSize:'14px'}}><del class ="me-2 text-secondary">$ 65</del><b>$ 45</b></p>
      </div>
    </div>
  </div>
</div>
</div>






< div class="card bg-dark text-white mt-5">
  <img src="P8.png" class="card-img rounded-0" alt="..."/>
  <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center ">
    <h5 class="card-title">INTRODUCING AMBIENT SPRAYS</h5>
    <p class="card-text mt-4">In a whisper of mist, ambient sprays dance,<br/>
Transforming spaces with fragrant romance.<br/>
In each gentle spray, a fresh, tranquil breeze,<br/>
Awakens senses, and puts minds at ease.</p>
    <button class="border-0">KNOW MORE</button>
  </div>


  
 
</div>

<div className="container">


<div className="text-center p-5  ">
  <button className="me-4 rounded-pill bg-black text-white fw-bold p-2 pe-2 ">Gents</button>
  <button className="me-4 rounded-pill bg-black text-white fw-bold p-2 pe-2 ">Top Rated</button>
  <button className="me-4 rounded-pill bg-black text-white fw-bold p-2 pe-2 ">Ladies</button>
  
</div>





</div>











<Product/>



  
   <div className="container mt-5">
      <div className="row text-center">
       

        {/* Delivery */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <img src="delivery1.png" alt="Delivery" className="img-fluid"  style={{ height: '60px' }} />
          <h6 className="mt-3">Fast Delivery</h6>
          <p class="text-secondary">We offer fast and reliable delivery options.</p>
        </div>

        {/* Time */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <img src="time.png" alt="Time" className="img-fluid"  style={{ height: '60px' }}  />
          <h6 className="mt-3">On-Time Services</h6>
          <p class="text-secondary">We guarantee services that are always on time.</p>
        </div>

         {/* Online Support */}
         <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <img src="online-support.png" alt="Online Support" className="img-fluid"  style={{ height: '50px' }} />
          <h6 className="mt-4">Online Support</h6>
          <p class="text-secondary">24/7 online support to assist you with any queries.</p>
        </div>
      </div>
    </div>
 

 <div>

 </div>
 
 <div className="mt-5 bg-black py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center text-white">
          <h5 className="mb-4">Signup to receive offers and updates</h5>

          {/* Container for input and button */}
          <div className="d-flex justify-content-center">
            <div style={{ width: '500px' }}> {/* Adjust the width here */}
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-0"
                  placeholder="Enter your email"
                  required
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-warning btn-lg rounded-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="row g-0 bg-black border-top">
      {/* Follow Us Section */}
      <div className="col-md-6 text-center py-4">
        <h5 className="mb-4 text-white">Follow Us</h5>
        <div>
          <i className="fa-brands fa-instagram mx-2" style={{ color: 'white', fontSize: '1.2rem' }}></i>
          <i className="fa-brands fa-facebook mx-2" style={{ color: 'white', fontSize: '1.2rem' }}></i>
          <i className="fa-brands fa-twitter mx-2" style={{ color: 'white', fontSize: '1.2rem' }}></i>
        </div>
        <div className="mt-3 ">
          <a href="/contact" className="text-white mx-3" style={{ textDecoration: 'none' }}>Contact Us</a>
          <a href="/privacy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" className="text-white mx-3" style={{ textDecoration: 'none' }}>Term and Conditions</a>
          <a href="/return-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Return Policy</a>
        </div>
      </div>



      {/* Contact Us Section */}
      <div className="col-md-6 text-center text-white py-4 ">
        <h5 className="mb-4 text-white">Contact Us</h5>
        <p>If you’d like to get in touch, please send us a mail during regular business hours.</p>
        <p className="text-decoration-none text-white" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          amiratscents.support@world.com
        </p>
      </div>
    </div>

    <div className="col-12 text-center py-3 bg-dark">
        <p className="text-white" style={{ marginBottom: 0 }}>
          Copyright © 2024 AmiratScents. All rights reserved.
        </p>
      </div>

</div>



    

    
    
  );
};

export default Home;
