import React from 'react';

const MainContent = () => {
    return (
        <div>
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

<div className="hero min-h-screen" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/web-development-programming-code-app-development-web-design-computer-seo-3d-background_125322-458.jpg?w=2000')"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
   

  <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg?w=2000" className="max-w-sm rounded-lg shadow-2xl mt-6 lg:mt-0 lg:mr-6" /> 
    <div className="text-left">
      <h1 className="text-5xl font-bold mb-4">Hello, I am a Web Developer</h1> 
      <p className="text-lg">Welcome to my web developer portfolio! I specialize in creating responsive and dynamic websites that provide an exceptional user experience. With a strong foundation in HTML, CSS, and JavaScript, I bring innovative designs to life and optimize performance. I am experienced in various frameworks and libraries like React and Angular, enabling me to develop robust and scalable web applications. Let&apos;s collaborate and bring your ideas to the digital world!</p> 
    </div>
  </div>
</div>




  </div>
</div>

        </div>
    );
};

export default MainContent;