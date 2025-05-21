import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-black animate-slideUp">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="mb-2"><strong>City:</strong> Växjö, Sweden</p>
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:tareqn.nassrallah@gmail.com" className="text-blue-600 hover:underline">tareqn.nassrallah@gmail.com</a></p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;