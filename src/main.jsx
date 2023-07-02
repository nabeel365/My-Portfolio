import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import About from './Components/Banner/Navbar/NavbarLinks/About';
import Resume from './Components/Banner/Navbar/NavbarLinks/Resume';
import Contact from './Components/Banner/Navbar/NavbarLinks/Contact';
import MainContent from './Components/MainContent/MainContent';
import Skills from './Components/Skills/Skills';
import Blogs from './Components/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <MainContent></MainContent>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'skills',
        element: <Skills></Skills>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
