import React from 'react';
import ProfilePicture from '../assets/ProfilePicture.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section className="section">
        <div className="container mx-auto h-auto relative">
            {/* text & img wrapper */}
            <div className=" flex flex-col md:flex-row h-full items-center justify-center gap-x-24 text-center md:text-left md:pt-40">
                {/* Image */}
                <div className="flex  md:max-h-max order-2 md:order-none ">
                    <img src={ProfilePicture} alt="" className="md:w-[500px] md:h-[500px]"/>
                </div>
                {/* text */}
                <div className="flex-1 pt-36 pb-14 md:pt-0 md:w-auto z-10 flex flex-col justify-center items-center md:items-start">
                    <h1 className="h1">About Me</h1>
                    <p className="mb-12 max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Cum recusandae quibusdam accusantium non autem, delectus est commodi
                          velit molestiae labore praesentium eos voluptatum accusamus a nobis
                           impedit ipsam tempora at?
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet
                     ea perspiciatis sit soluta illo? Consequuntur magnam, voluptatum cum sit ab adipisci 
                     aliquid ipsa, reiciendis porro, molestiae illo! Distinctio, fugit?
                    </p>
                    <Link to={'/portfolio'} className='btn'>view my work</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage