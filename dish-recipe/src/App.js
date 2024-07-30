import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.Component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Pages/Signup.Component';
import Login from './Components/Pages/Login.Component';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Components/Pages/HomePage';



function App() {
  
  return (
    <> 
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>

</>
  );
}

export default App;
