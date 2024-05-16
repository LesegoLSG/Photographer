import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileNav from './MobileNav';


const Header = () => {
  return (
   <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
            {/* Logo */}
            <Link to={'/'} className="max-w-[200px]">
                <h1 className="text-3xl font-bold italic">Less-Ego</h1>
            </Link>
            {/* Navigation */}
            <nav className="hidden md:flex gap-x-12 font-semibold">
                {/* Link to Home */}
                <Link 
                to={'/'}
                className="text-[#696c6d] hover:text-primary transition"
                >
                    Home
                </Link>
                {/* About */}
                <Link 
                to={'/about'}
                className="text-[#696c6d] hover:text-primary transition"
                >
                    About
                </Link>
                {/* Portfolio */}
                <Link 
                to={'/portfolio'}
                className="text-[#696c6d] hover:text-primary transition"
                >
                    Portfolio
                </Link>
                {/* Contact */}
                <Link 
                to={'/contact'}
                className="text-[#696c6d] hover:text-primary transition"
                >
                    Contact
                </Link>

            </nav>
         
        </div>
           {/* Socials */}
           <Socials/>
            {/* mobile nav */}
            <MobileNav/>
   </header>
  )
}

export default Header