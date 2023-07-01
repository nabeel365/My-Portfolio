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
        path: 'resume',
        element: <Resume></Resume>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
