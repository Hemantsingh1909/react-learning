import React from 'react'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <footer className='font-sans'>
    <div className="max-w-8xl mx-auto px-4 sm:px-6">

      {/* Top area: Blocks */}
      <div className="flex justify-between sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 font-medium">

        {/* 1st block */}
        <div className="sm:col-span-12 lg:col-span-3">
          <div className="text-4xl text-white">
            <a href="#0" className="text-[#993413] text-2xl hover:text-white hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-white text-2xl hover:text-[#993413] hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
          </div>
        </div>

        {/* 2nd block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className="text-[#993413] text-4xl font-medium mb-2 cursor-pointer">Products</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Web Studio</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">DynamicBox Flex</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Programming Forms</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Integrations</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Command-line</a>
            </li>
          </ul>
        </div>

        {/* 3rd block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className="text-[#993413] text-4xl font-medium mb-2 cursor-pointer">Resources</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Documentation</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Tutorials & Guides</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Support Center</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Partners</a>
            </li>
          </ul>
        </div>

        {/* 4th block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
        <h6 className="text-[#993413] text-4xl font-medium mb-2 cursor-pointer">Company</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Home</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">About us</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Company values</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Pricing</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-white text-xl hover:text-[#993413] transition duration-150 ease-in-out">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* 5th block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
        <h6 className="text-[#993413] text-4xl font-medium mb-2 cursor-pointer">Subscribe</h6>
          <p className="text-white text-xl mb-4">Get the latest news and articles to your inbox every month.</p>
          <form>
            <div className="flex flex-wrap mb-4">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                <div className="relative flex items-center max-w-sm">
                  <input id="newsletter" type="email" className="form-input w-full rounded-md text-gray-800 px-2 py-2.5 pr-12 text-2xl" placeholder="Your email" required />
                  <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                    <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                    <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </button>
                </div>
                {/* Success message */}
                {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
              </div>
            </div>
                    {/* Social as */}
                    <ul className="flex justify-start mb-4 pb-8 m-12 md:order-1 md:ml-4 md:mb-0">
                      <li>
                        <a href="#0" className="flex rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                        <SocialIcon network="facebook" target="_blank" url="#" />
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="#0" className="flex rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                        <SocialIcon network="instagram" target="_blank" url="#" />
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="#0" className="flex rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                        <SocialIcon network="whatsapp" target="_blank" url="#" />
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="#0" className="flex rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                        <SocialIcon network="youtube" target="_blank" url="#" />
                        </a>
                      </li>
                    </ul>
          </form>
        </div>

      </div>

      {/* Bottom area */}
      <div className="md:flex md:items-center md:justify-center py-4 md:py-8 border-t border-gray-200">
        {/* Copyrights note */}
        <div className="text-2xl text-gray-400 mr-4">&copy;2023 Tradebazar.in All rights reserved.</div>

      </div>

    </div>
  </footer>
  )
}

export default Footer

