import React from 'react';
import Camera from '../assets/Camera.jpg'

const ContactPage = () => {
  return (
    <section className="section bg-white">
        <div className="container mx-auto h-full">
            <div className="flex flex-col md:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center md:text-left">
            {/* bg */}
            <div className="hidden md:flex bg-blue-800 absolute top-72 bottom-0 left-0 right-0 -z-10">bg</div>
            {/* text and form */}
            <div className="md:flex-1 md:pt-32 px-4">
                <h1 className="h1">Contact me</h1>
                <p>I would love to work with you</p>
                {/* form */}
                <form className=" flex flex-col gap-y-4">
                    <div className="flex gap-x-10">
                        <input
                        className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                         type="text"
                          placeholder='Your Name' 
                          />
                          <input
                        className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                         type="text"
                          placeholder='Your Email Address' 
                          />
                    </div>
                    <input
                        className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                         type="text"
                          placeholder='Your Message' 
                          />
                          <button className="btn mb-[30px] mx-auto md:mx-0 self-start">Send</button>
                </form>
            </div>
            {/* image */}
            <div className="md:flex-1">
                <img src={Camera} alt=""/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ContactPage