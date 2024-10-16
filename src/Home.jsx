import React from 'react';
import { Login } from './login';
import { Signup } from './signup';
import { Link } from 'react-router-dom'; // No need for Router here

export default function Home() {
  return (
    <>
      <div className='container d-flex'>
        <div className='row'>
          {/* Left side column */}
          {/* <div className='col-6'>
            <h1>Welcome to React</h1> */}

            {/* Login and Signup Forms */}
            <div className='col-12 mb-3'>
              {/* <Login />
              <Signup /> */}
            </div>

            {/* Login button */}
            {/* <Link to='/login'>
              <button className='btn btn-primary'>Login</button>
            </Link>
          </div> */}

          {/* Right side column */}
          <div className='col-6'>
            {/* Signup button */}
            {/* <Link to='/signup'>
              <button className='btn btn-primary'>Signup</button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}