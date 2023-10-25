import React from 'react'

const Blog = () => {
  return (
    <>
<div class="container mx-auto flex flex-wrap py-6 font-sans">
    <section class="w-full md:w-2/3 flex flex-col items-center px-3">

            <article class="flex flex-col shadow my-4">
                <a href="#" class="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/49411627/1000x500?sig=1"/>
                </a>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Beginner</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Introduction to Trading: Understanding the Basics</a>
                    <p href="#" class="text-sm pb-3">
                        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p>
                    <a href="#" class="pb-6">Definition of trading and its significance in the financial market.
                    Explanation of different types of trading: stocks, forex, cryptocurrencies, commodities, etc.</a>
                    <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>

    <article class="flex flex-col shadow my-4">
        <a href="#" class="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/49411627/1000x500?sig=2"/>
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Intermediate</a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Mastering Technical Analysis: Tools and Techniques for Traders</a>
            <p href="#" class="text-sm pb-3">
                By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
            </p>
            <a href="#" class="pb-6">Brief overview of technical analysis and its role in predicting price movements.
            Importance of technical analysis in making informed trading decisions.</a>
            <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
        </div>
    </article>

    <article class="flex flex-col shadow my-4">
        <a href="#" class="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/49411627/1000x500?sig=3"/>
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Advanced</a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Psychology of Trading: Mastering the Mental Game</a>
            <p href="#" class="text-sm pb-3">
                By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
            </p>
            <a href="#" class="pb-6">Highlight the emotional challenges faced by traders, including fear, greed, and impatience.
            Importance of mastering emotions for successful trading.</a>
            <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
        </div>
    </article>

    <div class="flex items-center justify-between py-8 mx-2">
        <a href="#" class="h-11 w-11 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-lg flex items-center justify-center">1</a>
        <a href="#" class="h-11 w-11 font-semibold text-gray-600 hover:bg-blue-600 hover:text-white text-lg flex items-center justify-center">2</a>
        <a href="#" class="h-11 w-11 font-semibold text-gray-600 hover:text-white text-lg flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
    </div>

</section>

<aside class="w-full md:w-1/3 flex flex-col items-center px-3">

    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">About Us</p>
        <p class="pb-2">Welcome to Trade Bazar, Where Trading Expertise Meets Innovation!<br/>
        At Trade Bazar, we believe that everyone deserves the opportunity to thrive in the world of trading, regardless of their experience level. Established with a passion for empowering individuals to achieve financial freedom, we have become a leading force in the trading industry, pioneering the concept of Copy Trading.
        </p>
        <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
            Get to know us
        </a>
    </div>

    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Instagram</p>
        <div class="grid grid-cols-3 gap-3">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=1"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=2"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=3"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=4"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=5"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=6"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=7"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=8"/>
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/49411627/150x150?sig=9"/>
        </div>
        <a href="https://www.instagram.com/tradebazar.in/" target='_blank' class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
            <i class="fab fa-instagram mr-2"></i> Follow @tradebazar.in
        </a>
    </div>

</aside>

</div>

</>
  )
}

export default Blog
