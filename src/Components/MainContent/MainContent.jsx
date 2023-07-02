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
    })
  }
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/web-development-programming-code-app-development-web-design-computer-seo-3d-background_125322-458.jpg?w=2000')" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="container mx-auto px-4">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div className="text-left lg:mr-6">
                <Fade direction="left" triggerOnce>
                  <h1 className="text-5xl font-bold mb-4">Hello,
                  <br /> I am <strong>Nabeel Choudhuri</strong>, Web Developer</h1>
                </Fade>
                <Fade direction="left" delay={300} triggerOnce>
                  <p className="text-lg">Welcome to my web developer portfolio! I specialize in creating responsive and dynamic websites that provide an exceptional user experience. Let&apos;s collaborate and bring your ideas to the digital world!</p>
                </Fade>
                <div className="mt-4">
                  <Fade direction="up" delay={600} triggerOnce>
                    <a onClick={resumeDownload} href="Resume/Nabeel Choudhuri.pdf" download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                     <button className='btn-lg rounded-2xl'> Download Resume</button>
                    </a>
                  </Fade>
                </div>
              </div>
              <Fade cascade damping={0.2} triggerOnce>
                <div className="max-w-sm rounded-lg shadow-2xl mt-6 lg:mt-0">
                  <img src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg?w=2000" className="w-full h-auto" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <br />

      <Skills></Skills>

      <br />

      <Projects></Projects>
    </div>
  );
};

export default MainContent;
