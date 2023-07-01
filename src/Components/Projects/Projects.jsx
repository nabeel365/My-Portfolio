import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
  const projects = [
    {
      title: 'Yummy-Eats',
      description: [
        'Developed a responsive e-commerce website using React, integrated with a back-end API.',
        'Implemented a user registration and authentication system using Express.js and MongoDB.',
        'Designed and optimized the website for mobile devices using CSS media queries.',
        'Provided details about various recipes, including information about food items, chefs, and their recipes.',
        'Links: GitHub-Client | GitHub-Server | Live-Site',
      ],
      images: ['/public/images/Yummy Eats - Google Chrome 01-07-2023 09_19_22 PM.png', '/public/images/project1-image2.jpg', '/public/images/project1-image3.jpg'],
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
      images: ['/public/images/project2-image1.jpg', '/public/images/project2-image2.jpg', '/public/images/project2-image3.jpg'],
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
      images: ['/public/images/project3-image1.jpg', '/public/images/project3-image2.jpg', '/public/images/project3-image3.jpg'],
    },
  ];

  return (
    <div className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img src={image} alt={project.title} className="object-cover h-64 sm:h-72 md:h-80 w-full" />
                </div>
              ))}
            </Carousel>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <ul className="list-disc list-inside text-gray-700">
                {project.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
