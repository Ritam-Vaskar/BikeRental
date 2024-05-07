import React from 'react';
import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import NavBar from './NavBar/Navbar';
import { useState, useEffect } from 'react';
import MobileNavBar from './NavBar/MobileNavbar';

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimention());

  function getWindowDimention(){
    const { innerWidth: width, innerHeight: height } = window;
    return({width, height});
  }
  
  function handleResize() {
    setWindowDimensions(getWindowDimention());
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>

      {(windowDimensions.width > 990)? <NavBar /> : <MobileNavBar />}

      
      <AllRoutes />
    </div>
  );
}

export default App;
