import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='home'>
     
<div class=" log container-fluid d-flex justify-content-center align-items-center">
  <div class="row  rbod text-center bg-black  text-light">
    <div class="col m-5  ">
    <h1 style={{ paddingTop:'2%' }}>Login</h1>
   <form action="">
  <input type='text' placeholder='enter your username'  className='form control'/><br/>
  <input type='text' placeholder='enter your pasword'  className='form control'/><br/>
 


<Link to={"/Dashboard"}><button type='button' class="btn  btn-outline-warning  w-10  m-2">Login</button></Link><br/>
<input   type='checkbox'  style={{ cursor: "pointer" }}/>rememberMe
</form>
<p>Dont have an account?<Link to={"/Signup"}>Signup </Link></p>
<p>Forgot Password</p>
    </div>
   
  </div>
</div>  
    </div>
  );
}

export default Login

