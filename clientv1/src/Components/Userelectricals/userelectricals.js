import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StarRatings from "react-star-ratings";

export function Userelectronics()
{
    const [mobdetail,setMobdetail]=useState([]);
    useEffect(()=>
    {
        fetch("http://localhost:2611/adminelectronics")
        .then(bookdata=>bookdata.json())
        .then(getdata=>setMobdetail(getdata))
    }
    )
    
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
        <div className="bookReview container-fluid ">
        <div className="container text-center title">
            
            </div>
            <div className="row">
      {
           mobdetail.map((value,index)=>

                <>
                <div className="col-lg-2  d-flex">
                    <div className="card  carditems">
                        <img src={value.image} className="cardimg w-25"/>
                        <div className="card-body">
                            <h5 className="cardtitle">{value.ename}</h5>
                            <StarRatings
                                        rating={value.rating}
                                        starDimension="20px"
                                        starSpacing="10px"
                                        starEmptyColor="grey"
                                        starRatedColor="green"

                                    />
                            <Link to={`/singleelectronics/${value.eid}`} className="btn btn-dark mt-2">view more</Link>
                        </div>
                    </div>
                </div>
      </>  
           
           )}
           </div>
           </div>
           </>
    );
}