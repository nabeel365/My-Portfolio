import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Contact Me</h1>
        <p className="text-lg text-gray-300 text-center mb-4">
          If you have any inquiries or would like to collaborate on a project, please feel free to reach out to me using the contact information below.
        </p>
        <div className="flex items-center mb-4">
          <svg
            className="w-6 h-6 text-gray-300 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          <span className="text-lg text-gray-300">Email: choudhurinabeel@gmail.com</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-300 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            ></path>
          </svg>
          <span className="text-lg text-gray-300">Phone: +91 9002096373</span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
