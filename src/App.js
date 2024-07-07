import logo from './logo.svg';
import './App.css';
import React from 'react'


// import components
import Header from './Components/Header';
import AnimRoutes from './Components/AnimRoutes';

//importing router 
import {BrowserRouter as Router} from 'react-router-dom'; 

//import motion 
import { motion } from 'framer-motion'; 


function App() {
  return (
    <>
     Jocey Portfolio
      
      <Router>
        <Header/>
        <AnimRoutes/>
      </Router>

    </>
    

  );
}

export default App;
