import React from 'react';

interface CvButtonProps {
  cvPath: string;
}

const CvButton: React.FC<CvButtonProps> = ({ cvPath }) => {
  return (
    <div className="text-center mt-20">
      <a 
        href={cvPath}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-200 transform transition-transform duration-300 hover:-translate-y-1"
      >
        
        SHOW CV
      </a>
    </div>
  );
};

export default CvButton;