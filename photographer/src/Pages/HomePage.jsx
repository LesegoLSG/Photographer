import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/ProfilePicture.jpg';

const HomePage = () => {
  return (
    <section className="section">
            <div className="container mx-auto h-full relative">
                {/* text and img wrapper */}
                <div className="flex flex-col justify-center">
                    {/* text */}
                    <div className="w-full pt-36 pb-14 md:pt-0 md:pb-0 md:w-auto z-10 md:absolute flex flex-col justify-center items-center md:items-start">
                        <h1 className="h1">
                            Photographer <br/> & Film Maker
                        </h1>
                        <p className="text-[26px] md:text-[36px] font-primary mb-4 md:mb-12">South Africa,RSA</p>
                        <Link to={'/contact'} className="btn mb-[30px]">Hire Me</Link>
                    </div>
                    {/* img */}
                    <div className="flex justify-end max-h-96 md:max-h-max">
                        <div className="relative md:-right-40 w-3/5">
                            <img src={ProfilePicture} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
    </section>
  )
}

export default HomePage