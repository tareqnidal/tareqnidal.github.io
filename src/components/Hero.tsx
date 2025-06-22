import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center mb-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Hello <span className="inline-block animate-wave">👋</span>
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
        I'm <span className="text-yellow-500">Tareq</span>, a <span className="italic">Software Engineer</span>
      </h2>
      <p className="text-xl sm:text-2xl text-gray-400">
        based in Sweden.
      </p>
    </div>
  );
};

export default Hero;