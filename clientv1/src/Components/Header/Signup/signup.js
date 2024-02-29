import React from "react";
import axios from "axios";

export function Signup(){
    function formsubmission(event){
    event.preventDefault()
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var mobileno=document.getElementById("mobileno").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value

    var key={
        fname:fname,
        lname:lname,
        mobileno:mobileno,
        email:email,
        password:password,
    }
    if(fname==""){
        alert("Enter the First Name")
    }
    else if(lname==""){
        alert("Enter the Last Name")

    }
    else if(mobileno==""){
        alert("Enter the Mobile Number")

    }
    else if(email==""){
        alert("Enter the Email-Id")

    }
    else if(password==""){
        alert("Enter the Password")
    }
    else{
        axios.post("http://localhost:2611/signup",key)
        .then((userdet)=>{
            if(userdet.data.status==="error"){
                alert("data not inserted")
            }
            else if(userdet.data.status==="success"){
                alert("data inserted")
                window.location.href="/login"
            }
        })
    }
}
    return(
        <>
        <form class="sign_background" onSubmit={formsubmission}>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-2 mt-5">
            <h2>Sign up</h2>
            </div>
            <div class="col-8"></div>
            <div class="col-1"></div>
        <div class="mb-3 col-4">
  <input type="text" class="form-control" id="fname" placeholder="First Name"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="mobileno" placeholder="Mobile Number"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="email" placeholder="Email"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="password" placeholder="Password"/>
</div>
<div class="col-7"></div>
<div class="col-2"></div>
<div class="col-2">
    <button type="submit" class="btn btn-primary">SIGN UP</button>
  </div>
  <div class="col-8"></div>
  <div class="col-1"></div>
  <div class="mt-2 col-4">
  <p>Already have an account? <a class="link-opacity-100" href="/login">Login</a></p>
  </div>
</div>
</form>
        </>
    );
}