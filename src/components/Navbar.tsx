'use client';

import { useState, useEffect } from 'react';

const categories = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'about', name: 'About', href: '#about' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: '0px', width: '0px' });
  const [isUserClicking, setIsUserClicking] = useState(false);

  // Function to determine which section is currently in view
  const getCurrentSection = () => {
    const sections = categories.map(cat => cat.id);
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) { // 100px offset for navbar height
          return sections[i];
        }
      }
    }
    return 'home';
  };

  // Function to update underline position
  const updateUnderline = (categoryId: string) => {
    const activeIndex = categories.findIndex(cat => cat.id === categoryId);
    if (activeIndex !== -1) {
      const container = document.querySelector('.nav-container');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const activeButton = container.children[activeIndex] as HTMLElement;
        if (activeButton) {
          const buttonRect = activeButton.getBoundingClientRect();
          const left = buttonRect.left - containerRect.left;
          const width = buttonRect.width;
          setUnderlineStyle({ left: `${left}px`, width: `${width}px` });
        }
      }
    }
  };

  // Update active category based on scroll position (only when not user clicking)
  useEffect(() => {
    const handleScroll = () => {
      if (!isUserClicking) {
        const currentSection = getCurrentSection();
        setActiveCategory(currentSection);
        updateUnderline(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isUserClicking]);

  // Update underline position when active category changes
  useEffect(() => {
    updateUnderline(activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string) => {
    setIsUserClicking(true);
    setActiveCategory(categoryId);
    setIsMobileMenuOpen(false);
    
    // Update underline immediately
    updateUnderline(categoryId);
    
    // Smooth scroll to section with proper offset
    const element = document.getElementById(categoryId);
    if (element) {
      const navbarHeight = 80; // Height of the navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }

    // Reset user clicking flag after scroll animation
    setTimeout(() => {
      setIsUserClicking(false);
    }, 1000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">BennyBunny🐰</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 nav-container relative">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'text-white font-bold text-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
              {/* Sliding underline */}
              <div 
                className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-white font-bold text-xl'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 