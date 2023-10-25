import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../../images/hero-image.webp'
import blur from '../../images/blur.svg'
import Card from '../Card'

const Home = () => {
  return (
    <>
      <div className="relative text-center bg-black mx-auto my-0 font-sans">
          <img className='max-w-full h-auto z-[-1]' src={Banner} alt="hero-img" />
          <img className='max-w-full h-auto z-[-1]' src={blur} alt="blur" />
            <div className="absolute flex flex-col justify-start text-white inset-0 backdrop-blur-sm">
                <h1 className='text-[100px] pr-[17vw] mb-2.5 pt-[15vh] font-semibold drop-shadow-md'>Welcome to <span className='text-orange-700'>Trade Bazar</span></h1>
                <p className='text-4xl font-semibold m-0 pt-[2vh] pr-[62.3vw] drop-shadow-md'>India's Premier Trading Community</p>
                <h2 className='text-8xl font-semibold mb-5 pt-[20vh] pr-[19vw] drop-shadow-md'>By Traders | With Traders | For Traders </h2>
                <p className='text-4xl font-semibold m-0 pt-[20vh] pr-[54.3vw] drop-shadow-md'>Your Gateway to Profitable Trading Experiences</p>
                 <div className='pt-[5vh] flex pl-[6.7vw] font-sans'>
                 <Link 
                to="./about"
                className=''
                >
                <Card/>
                </Link>
                 </div>
                <h1 className='text-[100px] pr-[4vw] mb-2.5 pt-[15vh] font-bold drop-shadow-md'>Where INDIA Does <span className='text-orange-700'>Trading</span></h1>
            </div>
    </div>
    </>
  )
}

export default Home
