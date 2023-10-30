import React from 'react'
import { Link } from'react-router-dom'
import img from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import { CustomButton } from '../CustomButton/CustomButton'
const Features = () => {
  return (
<section class="bg-transparent py-8 pt-[20vh] font-sans">
    <div class="container mx-auto w-full flex flex-wrap items-center justify-between">
        <h2 class="w-full my-2 pb-[10vh] text-8xl font-bold text-white">
            How are we helping you?
        </h2>
        <div class="w-1/6 md:w-1/3 p-6">
            <div class="bg-gray-200 rounded overflow-hidden shadow">
                <img src={img} alt="image" />
                <div class="text-gray-600 text-xl font-bold px-6 pt-8 pb-[3vh]">
                    TRADING SETUPS
                </div>
                <div class="font-bold text-4xl text-black pb-[4vh] px-6">
                We Made Pre Made Trading Setups With Proper Entry-Exit.
                </div>
                <div className="flex justify-center pb-6">
                    <Link to="./about">
                    <CustomButton variant="contained" label='view' />
                    </Link>
                </div>
            </div>
        </div>

        <div class="w-1/6 md:w-1/3 p-6">
            <div class="bg-gray-200 rounded overflow-hidden shadow">
                <img src={img2} alt="img" />
                <div class="text-gray-600 text-xl font-bold px-6 pt-8 pb-[3vh]">
                    24*7 MARKET SUPPORT
                </div>
                <div class="font-bold text-4xl text-black pb-[4vh] px-6">
                Now Connect With Expert For Trading & Market Support
                </div>
                <div class="flex justify-center pb-6">
                <Link to="./about">
                <CustomButton variant="contained" label='view' />
                </Link>
                </div>
            </div>
        </div>

        <div class="w-1/6 md:w-1/3 p-6">
            <div class="bg-gray-200 rounded overflow-hidden shadow">
                <img src={img3} alt="img" />
                <div class="text-gray-600 text-xl font-bold px-6 pt-8 pb-[3vh]">
                    OFFLINE COMMUNITY TRADING
                </div>
                <div class="font-bold text-4xl text-black pb-[4vh] px-6">
                Offline Trading Center For You. Trade With Fellow Traders
                </div>
                <div class="flex justify-center pb-6">
                <Link to="./about">
                    <CustomButton variant="contained" label='view' />
                </Link>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Features
