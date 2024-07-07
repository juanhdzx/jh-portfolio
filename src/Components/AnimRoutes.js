import React from 'react';


import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

//importing routes/ route and useLocation hooks
import { Routes, Route, useLocation } from 'react-router-dom';


const AnimRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default AnimRoutes;