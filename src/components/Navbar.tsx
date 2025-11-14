import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    } dark:text-white`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Thiyagu | AWS Certified Cloud Practitioner
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button 
              className="ml-4 p-1 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 mt-4 py-4 px-4 rounded-lg shadow-lg absolute left-4 right-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="nav-link py-2" onClick={toggleMenu}>About</a>
              <a href="#education" className="nav-link py-2" onClick={toggleMenu}>Education</a>
              <a href="#skills" className="nav-link py-2" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="nav-link py-2" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="nav-link py-2" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;