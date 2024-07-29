import './App.css';
import React from 'react';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar.Component';
import Signup from './Components/Signup.Component';
import Login from './Components/Login.Component';


function App() {
  
  return (
    <>
<Navbar />
<Signup />
</>
  );
}

export default App;
