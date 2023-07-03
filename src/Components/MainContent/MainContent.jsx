import React from 'react';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

const MainContent = () => {
  const resumeDownload = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank You For Downloading My Resume',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const redirectToEmail = () => {
    window.location.href = 'mailto:choudhurinabeel@gmail.com';
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen pt-10">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-x-96  items-center justify-center lg:justify-between"> {/* Updated grid layout and justify classes */}
            <div className="text-container text-left ">
              <Fade direction="left" triggerOnce>
                <h1 className="text-5xl font-bold mb-4 text-white">Hello, <br /> I am <strong>Nabeel Choudhuri</strong>, Web Developer</h1>
              </Fade>
              <Fade direction="left" delay={300} triggerOnce>
                <p className="text-lg text-white">Welcome to my web developer portfolio! I specialize in creating responsive and dynamic websites that provide an exceptional user experience. Let&apos;s collaborate and bring your ideas to the digital world!</p>
              </Fade>
              <div className="mt-4 flex justify-center lg:justify-start"> {/* Updated justify class */}
                <Fade direction="up" delay={600} triggerOnce>
                  <a onClick={resumeDownload} href="Resume/Nabeel Choudhuri.pdf" download>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full shadow-lg mr-4">
                      Download Resume
                    </button>
                  </a>
                  <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full shadow-lg" onClick={redirectToEmail}>
                    Hire Me
                  </button>
                </Fade>
              </div>
            </div>
            <Fade cascade damping={0.2} triggerOnce>
              <div className="max-w-sm rounded-lg shadow-2xl mt-6 lg:mt-0 bg-transparent"> {/* Removed padding class */}
                <img src="images/img.png" className="w-full h-auto mx-auto" alt="Profile" />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <br />

      <Skills />

      <br />

      <Projects />
    </div>
  );
};

export default MainContent;
