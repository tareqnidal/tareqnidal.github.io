import React, { useState } from 'react';
import ContactModal from './ContactModal';

interface NavbarProps {
  profileImage: string;
}

const Navbar: React.FC<NavbarProps> = ({ profileImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
            <img 
              src={profileImage}
              alt="Profile" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <button 
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transform transition-transform duration-300 hover:-translate-y-1"
            onClick={() => setIsModalOpen(true)}
          >
            CONTACT ME
          </button>
        </div>
      </nav>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;