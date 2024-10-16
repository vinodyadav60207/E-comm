import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container-navbar'>
        <nav className='navbar'>
          <Link to='/'>
            <img className='logo' src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo" />
            </Link>
        <ul>
        <li >
          <Link to='/Mobile'>Mobile</Link>
        </li>
        <li >
        <Link to='/Tv'>Tv</Link>
        </li>
        <li>
        <Link to='/Laptop'>Laptops</Link>
        </li>
        <li >
        <Link to='/Tablets'>Tablets</Link>
        </li>
        <li >
        <Link to='/Printer'>Printer</Link>
        </li>
        <li>
        <Link to='/all-products'>All Products</Link>
        </li>
      </ul>

</nav>
    </div>
  )
}