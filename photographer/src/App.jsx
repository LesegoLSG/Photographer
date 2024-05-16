import { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimRoutes from './Components/AnimRoutes';
import Header from './Components/Header/Header';

function App() {

  return (
    <>
    <Router>
          <Header/>
        <AnimRoutes/>
    </Router>
        
    </>
  )
}

export default App
