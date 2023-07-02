import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
          <h1  className="text-white text-3xl font-bold ">
            Nabeel Choudhuri
          </h1>
          <div className="md:hidden">
            {isMenuOpen ? (
              <button
                className="focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                className="focus:outline-none"
                onClick={toggleMenu}
                aria-label="Open Menu"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            )}
          </div>
          <div 
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-4 mt-4 md:mt-0 pr-5`}
          >
            <div className="relative">
             <Link to="/">
             <button
                className="block text-white font-bold hover:text-gray-300 focus:outline-none"
                onClick={toggleMenu}
              >
                HOME
              </button>
             </Link>
            </div>
            <div className="relative">
              <Link to="/about">
              <button
                className="block text-white font-bold hover:text-gray-300 focus:outline-none"
                onClick={toggleMenu}
              >
                ABOUT
              </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="/blogs">
              <button
                className="block text-white font-bold hover:text-gray-300 focus:outline-none"
                onClick={toggleMenu}
              >
                BLOGS
              </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="contact">
              <button
                className="block text-white font-bold hover:text-gray-300 focus:outline-none"
                onClick={toggleMenu}
              >
                CONTACT
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
