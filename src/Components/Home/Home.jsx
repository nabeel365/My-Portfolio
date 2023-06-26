import React from 'react';
import Navbar from '../Banner/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Home;