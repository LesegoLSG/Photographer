import React from 'react';
import AboutPage from '../Pages/AboutPage';
import HomePage from '../Pages/HomePage';
import ContactPage from '../Pages/ContactPage';
import PortfolioPage from '../Pages/PortfolioPage';

import {Routes,Route,useLocation} from 'react-router-dom';

const AnimRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  )
}

export default AnimRoutes