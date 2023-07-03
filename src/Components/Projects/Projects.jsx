import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Slide } from 'react-awesome-reveal';

const Projects = () => {
  const projects = [
    {
      title: 'Yummy-Eats',
      description: [
        'Developed a responsive e-commerce website using React, integrated with a back-end API.',
        'Implemented a user registration and authentication system using Express.js and MongoDB.',
        'Designed and optimized the website for mobile devices using CSS media queries.',
        'Provided details about various recipes, including information about food items, chefs, and their recipes.',
      ],
      images: ['images/Yummy Eats - Google Chrome 01-07-2023 09_19_22 PM.png', 'images/Yummy Eats - Google Chrome 01-07-2023 09_22_26 PM.png', 'images/Yummy Eats - Google Chrome 01-07-2023 09_19_56 PM.png'],
      liveSiteLink: 'https://starlit-salmiakki-ebf4c1.netlify.app/',
      gitHubClient: 'https://github.com/nabeel365/yummy-eats',
      gitHubServer: 'https://github.com/nabeel365/yummy-server'
    },
    {
      title: 'Toy-Car-World',
      description: [
        'Developed a responsive e-commerce website using React, integrated with a back-end API.',
        'Implemented a user registration and authentication system using Express.js and MongoDB.',
        'Implemented a search functionality allowing users to find specific toy cars based on various criteria.',
        'Implemented functionality to update toy data, allowing users to modify information such as specifications, pricing, and availability.',
        'Links: GitHub-Client | GitHub-Server | Live-Site',
      ],
      images: ['images/Yummy Eats - Google Chrome 01-07-2023 09_23_22 PM.png', 'images/Yummy Eats - Google Chrome 01-07-2023 09_24_22 PM.png', 'images/Yummy Eats - Google Chrome 01-07-2023 09_25_16 PM.png'],
      liveSiteLink: 'https://toycarworld.web.app/',
      gitHubClient: 'https://github.com/nabeel365/toy-car-world',
      gitHubServer: 'https://github.com/nabeel365/cars-server'
    },
    {
      title: 'Craftopia-Art-School',
      description: [
        'Developed a web application for an art school.',
        'Students can choose classes, view their selected classes, make payments, and manage their enrollment.',
        'Instructors can add classes, track their classes, and receive feedback from the admin.',
        'Admins can manage class approvals, user roles, and provide feedback to instructors.',
        'Links: GitHub-Client | GitHub-Server | Live-Site',
      ],
      images: ['images/Yummy Eats - Google Chrome 01-07-2023 09_30_35 PM.png', 'images/Yummy Eats - Google Chrome 01-07-2023 09_39_18 PM.png', 'images/Yummy Eats - Google Chrome 01-07-2023 09_32_35 PM.png'],
      liveSiteLink: 'https://6489fb8600cc930946a1eedf--earnest-choux-b25449.netlify.app/',
      gitHubClient: 'https://github.com/nabeel365/Craftopia-Art-School',
      gitHubServer: 'https://github.com/nabeel365/craftopia-server'
    },
  ];

  return (
    <div className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Projects</h2>
        {projects.map((project, index) => (
          <Slide
            key={index}
            direction={index % 2 === 0 ? 'left' : 'right'}
            triggerOnce
            delay={index * 200}
          >
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg overflow-hidden shadow-lg mb-6">
              <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                {project.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img src={image} alt={project.title} className="object-cover h-64 sm:h-72 md:h-80 w-full" />
                  </div>
                ))}
              </Carousel>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <ul className="list-disc list-inside text-gray-200">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a href={project.liveSiteLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
                    Live Site
                  </a>
                  GitHub - &nbsp;
                  <a href={project.gitHubClient} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
                    Client
                  </a>
                  <a href={project.gitHubServer} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    Server
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Projects;




