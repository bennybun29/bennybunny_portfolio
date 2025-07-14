'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "J-MAB Mobile Application",
    description: "An Android e-commerce application tailored for vehicle owners. J-MAB Mobile allows users to browse and purchase automotive essentials such as oils, tires, lubricants, and batteries. The app supports secure payments, real-time inventory updates, and order tracking.",    image: "/jmab_banner.png",
    technologies: ["Kotlin", "Android SDK", "PHP", "MySQL", "REST API", "PayMongo"],    
    liveUrl: "",
    githubUrl: "https://github.com/bennybun29/J-MAB_Mobile"  },
  {
    id: 2,
    title: "4 Clues, 1 Word",
    description: "A simple word-guessing game built using Python and Pygame. Developed as my very first project in college, the game challenges players to guess a word based on four visual clues. It features basic game mechanics like score tracking, user input handling, and feedback for correct and incorrect answers. This project helped me gain foundational experience in game logic, event handling, and graphical interfaces using Python.",
    image: "/4clues_1word_banner.png", // Replace with an actual screenshot if available
    technologies: ["Python", "Pygame"],
    liveUrl: "", // Typically not needed for desktop games, unless you have a video or demo link
    githubUrl: "https://github.com/bennybun29/4-Clues-1-Word"
  },
  {
    id: 3,
    title: "AnonyNotes",
    description: "A simple notetaking web app created as a final project to consolidate everything I learned during the semester. Built using HTML, CSS, and vanilla JavaScript, the app includes basic UI elements such as buttons, text areas, navigation menus, and a simple rating feature. The black-themed UI reflects the name 'AnonyNotes', giving it a minimal, anonymous aesthetic. While it lacks a backend or database, the project served as a strong foundation for understanding how frontend technologies work together.",
    image: "/anonynotes_banner.png", // Replace with actual screenshot if available
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "", // Add if hosted anywhere (e.g., GitHub Pages)
    githubUrl: "https://github.com/bennybun29/AnonyNotes"
  },
  {
    id: 4,
    title: "Ongoing Project",
    description: "A Project that I'm currently working on with my team is to develop a mobile/web application that will be automated by AI using LLMs, using Django as the backend, and services like AWS. My role in this project is to develop the mobile application using Flutter, discover AWS and learn how to use LLMs.",
    image: "/WIP.png", // Placeholder - replace with actual project images
    technologies: ["Flutter", "Dart", "AWS", "LLMs"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
    image: "/portfolio_website.png", // Placeholder - replace with actual project images
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export default function ProjectSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideshowRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-advance slides every 5 seconds (only on desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-advance if not on mobile (check if touch events are supported)
      if (window.innerWidth > 768) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Slide */}
      <div 
        ref={slideshowRef}
        className="relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="aspect-video relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={currentProject.id === 1}
            />
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            {currentProject.title}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {currentProject.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {currentProject.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-medium rounded-full border border-gray-700 hover:border-indigo-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:scale-105"
              >
                Live Demo
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 hover:border-gray-500"
              >
                View Code
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-indigo-500 z-10 hidden md:flex"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-indigo-500 z-10 hidden md:flex"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/25'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-sm text-gray-400">
        {currentIndex + 1} of {projects.length}
      </div>
    </div>
  );
} 