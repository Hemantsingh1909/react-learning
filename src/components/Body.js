import React from 'react'
import Banner from '../images/hero-image.webp'
import blur from '../images/blur.svg'

const Body = () => {
  return (
    <div>
        <div class="container">
          <img src={Banner} alt="hero-img" />
          <img src={blur} alt="blur" />
            <div class="overlay-text">
                <h1>Welcome to Trade Bazar</h1>
                <p>Your Gateway to Profitable Trading Experiences</p>
                <h2>By Traders | With Traders | For Traders </h2>
                <p className='p'>India's Premier Trading Community</p>
                <button type='button' className='hero-button'>Buy Pre-Made Setup</button>
                <h1 className='filler-text'>Where INDIA Does Trading !</h1>
            </div>
            <div class="features">
                <div class="feature">
                    <h3>Expert Guidance</h3>
                    <p>Get insights and strategies from experienced traders.</p>
                </div>
                <div class="feature">
                    <h3>Community Collaboration</h3>
                    <p>Join a vibrant community of traders to learn and grow together.</p>
                </div>
                <div class="feature">
                    <h3>Secure Trading</h3>
                    <p>Trade with confidence in our secure and reliable platform.</p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Body
