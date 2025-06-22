import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import CvButton from './components/CvButton';
import SocialLinks from './components/SocialLinks';

// Import assets
import './styles/animations.css';

function App() {
  const headerImage = 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const profileImage = '/profile.jpeg';
  const cvPath = '/CV - IT Tareq Nassrallah.pdf'; 

  return (
    <div className="min-h-screen bg-black text-white">
      <Header headerImage={headerImage} />
      <Navbar profileImage={profileImage} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Portfolio />
          <CvButton cvPath={cvPath} />
        </div>
      </main>
      
      <SocialLinks />
    </div>
  );
}

export default App;