import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Singlefurniture(){
    var {hid}=useParams()
    const[image,setImage]=useState('')
    const[sname,setSname]=useState('')
    const[model,setModel]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const[rating,setRating]=useState('')

    useEffect(()=>{
        fetch("http://localhost:2611/singlefurniture/"+hid)
        .then(bookdetail=>bookdetail.json())
        .then((singlebook)=>{
            setImage(singlebook[0].image)
            setSname(singlebook[0].sname)
            setModel(singlebook[0].model)
            setPrice(singlebook[0].price)
            setDescription(singlebook[0].description)
            setRating(singlebook[0].rating)
            
           
        }
    )
    })
  ;
    return(
                <>
                   
                   <div className="bookReview container-fluid ">
                <div className="container text-center title">
                    <h3>ALOHOMORA</h3>
                    <h5>Unlock the Door to the World of Bibliophiles!</h5>
                   
                    </div>
                   <div className='row  container-fluid'>
                   <div className='col-lg-4 singlecard'>
                       <img src={image}className='img-fluid  singleimage'/>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 singlecard'>   
                       <h1>{sname}</h1>
                       <p className="singledesc" >{model}</p>
                       <p className="singleprice"><span>$</span>{price}</p>
                       <p className="singledesc" >{description}</p>
                       <p className="singlecat">{rating}
                      </p>
                       </div>
                   </div>
                   </div>
               </>
               );
           }

