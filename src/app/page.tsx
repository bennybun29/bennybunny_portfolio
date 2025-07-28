// Portfolio Page - Benedict Nacor
import Navbar from '../components/Navbar';
import ProjectSlideshow from '../components/ProjectSlideshow';
import MotionSection from '../components/MotionSection';
import MotionCard from '../components/MotionCard';
import Image from 'next/image';

// Portfolio Home Page - Benedict Nacor
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Home Section */}
      <div id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/lain.gif"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Profile Picture - Left Side */}
            <MotionCard delay={0.2}>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl shadow-indigo-500/25 bg-gray-800">
                    <Image
                      src="/benedict_profile.png"
                      alt="Benedict Nacor"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </MotionCard>
            
            {/* Content - Right Side */}
            <MotionCard delay={0.4} className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Hi, I&apos;m <strong className="text-white">Benedict Nacor</strong>!
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl lg:max-w-none">
                A passionate <strong className="text-white">Mobile/Android</strong> developer creating beautiful and functional mobile applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:scale-105"
                >
                  View My Work
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 hover:border-gray-500"
                >
                  Get In Touch
                </a>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <MotionCard className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I&apos;m a dedicated <strong className="text-white">Mobile Developer</strong> with a passion for creating innovative solutions
            </p>
          </MotionCard>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionCard delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  I began my journey in mobile development out of curiosity for how apps shape everyday experiences—right from our pockets. My first step was learning <strong className="text-white">Kotlin</strong> and building native Android apps, which gave me a solid foundation in user interface design, local databases, and backend integration.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Currently, I&apos;m focused on <strong className="text-white">Flutter and Dart</strong> to expand my skills in cross-platform app development. So far, I&apos;ve built two full-cycle mobile applications as academic projects—each grounded in real-world use cases and designed with clean, maintainable code in mind.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Beyond mobile, I&apos;m also exploring backend services like <strong className="text-white">AWS</strong> and learning about <strong className="text-white">CNN and Large Language Models (LLMs)</strong> to better understand how intelligent systems can enhance the apps I build. My goal is to bridge solid technical foundations with human-centered design.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether it&apos;s refining UI, managing app state efficiently, or integrating third-party APIs, I take pride in building apps that are both functional and enjoyable to use.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">5+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">1+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </MotionCard>
            
            <MotionCard delay={0.4}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Mobile App Development with Flutter & Kotlin</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Backend Development with MySQL & PHP</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Database Design & Management</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">UI/UX Design & Prototyping</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">API Development & Integration</span>
                  </li>
                  <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Currently learning AWS, CNN, and Large Language Models (LLMs)</span>
                </li>
                </ul>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <MotionCard className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </MotionCard>
          
          <MotionCard delay={0.2}>
            <ProjectSlideshow />
          </MotionCard>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <MotionCard className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I work with a variety of technologies to bring ideas to life
            </p>
          </MotionCard>
          
          <div className="grid md:grid-cols-3 gap-8">
            <MotionCard delay={0.2}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/25">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Flutter', 'Kotlin', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-indigo-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionCard>
            
            <MotionCard delay={0.4}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['PHP', 'MySQL', 'Python', 'Django', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-green-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionCard>
            
            <MotionCard delay={0.6}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Tools & Others</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Git', 'Canva', 'AWS', 'Figma', 'VSCode', 'IntelliJ IDEA', 'Android Studio', 'Cursor', 'Postman'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-purple-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <MotionCard className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects
            </p>
          </MotionCard>
          
          <MotionCard delay={0.2}>
            <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Let&apos;s Connect</h3>
                  <p className="text-gray-300 mb-6">
                    Whether you have a project in mind or just want to chat about different stuff, 
                    I&apos;d love to hear from you!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <span className="text-gray-300">nacorben06@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">Pangasinan, Philippines</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-6">
                    <a href="https://github.com/bennybun29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/benedict-nacor-62ba4032b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/bennybun.29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </MotionCard>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Benedict Nacor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
