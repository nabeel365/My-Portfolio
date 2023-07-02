import React from 'react';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { Fade } from 'react-awesome-reveal';
import Footer from '../Footer/Footer';

const MainContent = () => {
    return (
        <div>


     






<div>
  

<div>


<div className="hero min-h-screen" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/web-development-programming-code-app-development-web-design-computer-seo-3d-background_125322-458.jpg?w=2000')"}}>
     <div className="hero-overlay bg-opacity-60"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="">

         <div className="hero-content min-h-screen flex-col lg:flex-row-reverse">
           <Fade cascade damping={0.2} triggerOnce>
             <img src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg?w=2000" className="max-w-sm rounded-lg shadow-2xl mt-6 lg:mt-0 lg:mr-6" />
           </Fade>
           <div className="text-left">
             <Fade direction="left" triggerOnce>
               <h1 className="text-5xl font-bold mb-4">Hello, I am a Web Developer</h1>
             </Fade>
             <Fade direction="left" delay={300} triggerOnce>
               <p className="text-lg">Welcome to my web developer portfolio! I specialize in creating responsive and dynamic websites that provide an exceptional user experience. Let&apos;s collaborate and bring your ideas to the digital world!</p>
             </Fade>
             <div className="mt-4">
               <Fade direction="up" delay={600} triggerOnce>
                 <a href="/public/Resume/Nabeel Choudhuri.pdf" download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                   Download Resume
                 </a>
               </Fade>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

{/* </div>  */}

</div>
</div>


  




<br />

<Skills></Skills>

<br />

<Projects></Projects>

<br />

<Footer></Footer>


        </div>
    );
};

export default MainContent;