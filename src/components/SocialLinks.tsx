import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-40">
      <a 
        href="https://www.linkedin.com/in/tareq-nassrallah-721559153/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a 
        href="https://github.com/tareqnidal" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1"
        aria-label="GitHub Profile"
      >
        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a 
        href="mailto:tareqn.nassrallah@gmail.com" 
        className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1"
        aria-label="Email Me"
      >
        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;