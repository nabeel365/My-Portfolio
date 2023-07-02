import React from 'react';
import Navbar from '../Banner/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      
      <Outlet></Outlet>

<br />

      <Footer></Footer>
      
    </div>
  );
};

export default Home;