import React from 'react';
import data from '../Components/Portfolio/PortfolioData';
import PortfolioCard from '../Components/Portfolio/PortfolioCard';
import { Link } from 'react-router-dom';


const PortfolioPage = () => {
  return (
    <section className="section pt-32">
        <div className="h1 w-full flex justify-center items-center">
            <h1>Portfolio</h1>
        </div>
        <div className='md:w-full flex flex-col justify-center items-center'>
        <div className="w-4/5 h-auto md:px-10 grid md:grid-cols-3 gap-2  justify-items-center">
            {
                data.map((singleData,index) =>(
                     <PortfolioCard key={index} singleData={singleData}/>
                ))
            }
        </div>
        <Link to={'/contact'} className="btn">Hire Me</Link>
        </div>
        
    </section>
  )
}

export default PortfolioPage