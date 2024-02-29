import axios from "axios";
import React from "react";

export function Login(){
    function loginsubmission(event){
        event.preventDefault()
        var email= document.getElementById("email").value;
        var password=document.getElementById("password").value;

        var key={
            email:email,
            password:password,
        };
        if(email===""){
            alert("Enter the email")
        }
        else if(password===""){
            alert("Enter the password")
        }
        else{
            axios.post("http://localhost:2611/login",key)
            .then((userdata)=>{
                if(userdata.data.status=='empty_set'){
                    alert("Enter valid username")
                }
                else if(userdata.data.status=='success'){
                    var fid= userdata.data.fid
                    var email= userdata.data.email
                   
                    // alert('fid' +fid)
                    alert("Successfully logged in")
                    if(email==='Admin@gmail.com' ){
                    window.location.href=`/admin/${fid}`;
                    }
                    else 
                    {
                        window.location.href=`/user/${fid}`;
                        }
                }
                else if(userdata.data.status=='invalid_password'){
                    alert("Enter Valid Password")
                }
                else if(userdata.data.status=='both_are_invalid'){
                    alert("Enter Valid email and password")
                }
            })
         }
    }
        
    return(
    <>
    <form onSubmit={loginsubmission}>
        <div class="row">
        <div class="col-5"></div>
            <h2 class="col-2 mt-5">Login</h2>
            <div class="col-5"></div>
        <div class="col-4"></div>
<div class="mb-3 col-lg-4">
  <input type="text" class="form-control" id="email" placeholder="Email"/>
</div>
<div class="col-4"></div>
<div class="col-4"></div>
<div class="mb-3 col-lg-4">
  <input type="text" class="form-control" id="password" placeholder="Password"/>
</div>
<div class="col-4"></div>
<div class="col-5"></div>
<div class="col-lg-2">
    <button type="submit" class="btn btn-primary">LOGIN</button>
  </div>
  <div class="col-5"></div>
        </div>
    </form>
    </>
    );
}