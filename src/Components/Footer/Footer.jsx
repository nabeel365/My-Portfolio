import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faLinkedinIn, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/nabeel-choudhuri-3b794a25a/', '_blank');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic here
  };

  return (
    <footer className="footer bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Social</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="#" className="text-white hover:text-gray-300" onClick={handleLinkedInClick}>
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="mb-2">Phone:+91 9002096373</p>
            <p className="mb-2">Email: choudhurinabeel@gmail.com</p>
            <p>Address: Kolkata, India</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
            <p className="mb-2">Open to opportunities and collaborations. Reach out for inquiries or professional connections!</p>
            <form onSubmit={handleFeedbackSubmit}>
              <textarea className="w-full h-24 px-4 py-2 mb-2 bg-gray-800 text-white placeholder-gray-500 focus:outline-none" placeholder="Provide your feedback" required></textarea>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Send Feedback</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
