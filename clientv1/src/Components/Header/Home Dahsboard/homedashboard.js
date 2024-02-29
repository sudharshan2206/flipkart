import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export function Home(){

    return(
        <>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="https://i0.wp.com/goushrestha.com/wp-content/uploads/2020/01/flipkart-logo-vector-png-flipkart-vector-logo-720-3.png?ssl=1" class="d-block w-25" alt="..."/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/signup">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Profile</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <div class="container-fluid">
    <div class="row"> 
      <table>
        <thead>
        <tr>
            <th>
        <div class="active col ms-3">
  <Link to ={`/usermobile`}><img src="https://th.bing.com/th/id/R.65a4137376936ae9be364a44431c9348?rik=0STdQSU%2b2wHJeg&riu=http%3a%2f%2fwww.learningcomputer.com%2fblog%2fwp-content%2fuploads%2f2016%2f11%2fCell-Phone-Plans-topic-page-graphic.png&ehk=gkxu1Dk7B1f91j369HRMYQapfTwy7hxrk%2ftwAM80wcY%3d&risl=&pid=ImgRaw&r=0" class="d-block w-25" alt="Mobiles"/></Link>
            Mobiles
          </div>
          </th>
          <th>
        <div class="active">
        <Link to ={`/userfashion`}><img src="https://i.pinimg.com/originals/9a/4a/12/9a4a12ff22aa447a57a712b840d9611c.jpg" class="d-block w-25" alt="..."/></Link>
            Fashion
          </div>
          </th>
          <th>
        <div class="active">
        <Link to ={`/userelectronics`}><img src="https://th.bing.com/th/id/OIP.iAgyydPGwY4Qem6TPsNQJgHaHa?pid=ImgDet&w=474&h=474&rs=1" class="d-block w-25" alt="..."/></Link>
            Electronics
          </div>
            </th>
            <th>
        <div class="active col">
        <Link to ={`/userfurniture`}><img src="https://th.bing.com/th/id/OIP.Wy57-ghL26Sod84ide53tQHaFd?pid=ImgDet&w=474&h=349&rs=1" class="d-block w-25" alt="..."/></Link>
            Home & Furniture
          </div>
          </th>
          </tr>
          </thead>
      </table>
    </div>
  </div>

<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner advertisement">
    <div class="carousel-item active">
      <img src="https://assets.mspimages.in/gear/wp-content/uploads/2023/05/Upcoming-Flipkart-sale-2048x1075.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://bbst1.badabusiness.com/wp-content/uploads/2020/08/Flipkart.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://tri3d.in/wp-content/uploads/2021/06/FlipkartBanner-01.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="row">
<h2>Best of Electronics</h2>
<div class="card col-3">
  <img src="https://th.bing.com/th/id/OIP.3TPkHvQYn8CAfkF1nNQxegHaHa?w=500&h=500&rs=1&pid=ImgDetMain" class="card-img-top w-25" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Printers</h5>
    <p class="card-text">From $5000</p>
  </div>
</div>

<h2>Best of Fashions</h2>
<div class="card col-3">
  <img src="https://th.bing.com/th/id/OIP.3TPkHvQYn8CAfkF1nNQxegHaHa?w=500&h=500&rs=1&pid=ImgDetMain" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Printers</h5>
    <p class="card-text">From $5000</p>
  </div>
</div>

<h2>Best of Home & Furniture</h2>
<div class="card col-3">
  <img src="https://th.bing.com/th/id/OIP.3TPkHvQYn8CAfkF1nNQxegHaHa?w=500&h=500&rs=1&pid=ImgDetMain" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Printers</h5>
    <p class="card-text">From $5000</p>
  </div>
</div>

<h2>Best of Mobiles</h2>
<div class="card col-3">
  <img src="https://th.bing.com/th/id/OIP.3TPkHvQYn8CAfkF1nNQxegHaHa?w=500&h=500&rs=1&pid=ImgDetMain" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Printers</h5>
    <p class="card-text">From $5000</p>
  </div>
</div>
</div>

<br/>
<div>
    <h5>Flipkart Terms of Use</h5>
    <p>

This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.

This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name [www.flipkart.com] (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”)

The Platform is owned by Flipkart Internet Private Limited, a company incorporated under the Companies Act, 1956 with its registered office at Buildings Alyssa, Begonia & Clover, Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru – 560103, Karnataka, India and its branch offices at 2nd Floor, Block F (Flora), Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru-560103, Karnataka, India and; 447/C, 12th Main, 4th Block, Koramangala, Bengaluru-560034, Karnataka, India (hereinafter referred to as "Flipkart").

Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.

For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on the Platform by providing Registration Data while registering on the Platform as Registered User using the computer systems. Flipkart allows the User to surf the Platform or making purchases without registering on the Platform. The term "We", "Us", "Our" shall mean Flipkart Internet Private Limited.</p>
</div>

<div class="footer">
<table class="table table-dark table-borderless">
  <thead>
    <tr>
      <th scope="col">ABOUT</th>
      <th scope="col">GROUP COMPANIES</th>
      <th scope="col">HELP</th>
      <th scope="col">CONSUMER POLICY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Contact Us</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Myntra</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Payments</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Cancellation & Returns</a> </td>
      
      
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >About Us</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Flipkart Wholesale</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Shipping</a> </td>  
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Terms of Use</a> </td>
    </tr>
    <tr>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Careers</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Cleartrip</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Cancellation & Returns</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Security</a> </td>
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Flipkart Stories</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light"  >Shopsy</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >FAQ</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Privacy</a> </td>
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Press</a> </td>
    <td scope="row"></td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Report Infringement</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Sitemap</a> </td>
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Corporate Information</a> </td>
    <td scope="row"></td>
    <td scope="row"></td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Grievance Redressal</a> </td>
    </tr>
    <tr>
    <td scope="row"></td>
    <td scope="row"></td>
    <td scope="row"></td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >EPR Compliance</a> </td>
    </tr>
<div class="text-end">
    <FontAwesomeIcon icon={faInstagram} size="2xl"/>
    <FontAwesomeIcon icon={faXTwitter} size="2xl" />
    <FontAwesomeIcon icon={faFacebookF} size="2xl" />
    <FontAwesomeIcon icon={faYoutube} size="2xl" />
    </div>
  </tbody>
</table>
</div>
        </>
    );
}


