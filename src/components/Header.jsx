import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-8 text-white">
      <div className="flex items-center">
        <img src="/logo/logo1.png" alt="ZenithTech Logo" className="h-8 mr-4" />
        <span className="text-xl font-bold">ZenithTech</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="hover:text-[#B19EEF]">Accueil</Link>
        <Link to="/services" className="hover:text-[#B19EEF]">Nos Services</Link>
        <Link to="/technologies" className="hover:text-[#B19EEF]">Technologies</Link>
        <Link to="/smart-features" className="hover:text-[#B19EEF]">Smart Features</Link>
        <Link to="/blog" className="hover:text-[#B19EEF]">Blog</Link>
        <Link to="/tarifs" className="hover:text-[#B19EEF]">Tarifs</Link>
        <Link to="/contact" className="hover:text-[#B19EEF]">Contact</Link>
      </nav>
      <div>
        <Link to="/demo" className="bg-[#B19EEF] text-black font-bold py-2 px-4 rounded-lg hover:bg-opacity-80">
          Tester une démo
        </Link>
      </div>
    </header>
  );
};

export default Header;
