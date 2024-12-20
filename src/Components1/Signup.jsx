import React from 'react';
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup'>
        <h2>Signup</h2>
        <form action=""style={{ width: "100%", }}>
      <input type='text' placeholder='enter your email'  /> <br/>
      <input type='text' placeholder='create  password'  /><br/>
      <input type='text' placeholder='confirm password'  /><br/>
      </form>
      <Link to={"/dashboard"}> <button type='button' class="btn  btn-danger ">Signup</button><br/></Link>
      
    </div>
  )
}

export default Signup;
