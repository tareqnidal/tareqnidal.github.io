import React from 'react';

interface HeaderProps {
  headerImage: string;
}

const Header: React.FC<HeaderProps> = ({ headerImage }) => {
  return (
    <header className="w-full h-64 sm:h-96 md:h-128 lg:h-144 xl:h-160 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
      <img 
        src={headerImage} 
        alt="Header Background"
        className="w-full h-full object-cover"
      />
    </header>
  );
};

export default Header;