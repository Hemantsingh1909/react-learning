import React from 'react'
import contact from '../../images/contact.svg';
const Contact = () => {
  return (
<section className="relative pt-18 pb-120 flex flex-row justify-around pt-12 pb-12 mb-12 mt-12 w-full font-sans">
        <div className='flex items-center w-5/12'>
            <div className=''>
                <img src={contact} alt="contact img" />
            </div>
        </div> 
        
        <div className="flex w-5/12">
            <div className="flex row justify-start">
                <div className="w-full">
                    <div className="contact_wrapper mt-11 w-full">
                        <div className="text-white pb-4">
                            <h5 className="text-4xl pb-8 text-white">Contact Us</h5>
                            <h4 className="text-6xl pb-8 text-[#993413]">Get In Touch</h4>
                            <p className='text-xl leading-relaxed'>We would love to hear from you! If you have any questions, suggestions, or feedback, please feel free to get in touch with us.</p>
                        </div>
                        
                        <div className=''>
                            <form action="#">
                                <div>
                                    <div className='flex w-full'>
                                    <div className="md:w-1/2">
                                        <div className="mx-3 pt-[5vh] pr-[2vw]">
                                            <div className="mt-8">
                                                <input name="name" id="name" type="text" placeholder="Name" class="w-full rounded-md py-4 px-6 border border-solid border-body-color"/>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="mx-3 pt-[5vh] pr-[2vw] ">
                                            <div className="mt-8">
                                                <input name="email" id="email" type="email" placeholder="Email" class="w-full rounded-md py-4 px-6 border border-solid border-body-color"/>
                                            </div> 
                                        </div>
                                    </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="mx-3 pt-[5vh]">
                                            <div className="mt-8">
                                                <textarea name="message" id="message" placeholder="Message" rows="5" class="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"></textarea>
                                            </div> 
                                    </div>
                                    <div className="w-2/12">
                                        <div className="mx-3 pt-[5vh]">
                                            <div className="text-white h-14 w-44 text-center bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-2xl px-5 lg:px-5 py-2 lg:py-2.5 mr-1 focus:outline-none">
                                                <button type="submit" class='text-xl'>Submit</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            </form>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

  )
}

export default Contact
