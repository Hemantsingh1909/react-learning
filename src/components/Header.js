import React from 'react'
import logo from '../images/logo.png'

const header = () => {
  return (
    <div className='main-header'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        <div className='nav'>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="right-nav">
          <i class="fa-regular fa-user fa-2xl"></i>
          <button type='button'>Get Started</button>
        </div>
    </div>
  )
}

export default header
