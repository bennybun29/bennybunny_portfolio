import Image from 'next/image';

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Simple Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">BennyBunny🐰</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8">
                <a href="#home" className="text-white hover:text-gray-300">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
                <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            
            {/* Content - Right Side */}
            <div className="flex-1 text-center lg:text-left">
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
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I&apos;m a dedicated <strong className="text-white">Mobile Developer</strong> with a passion for creating innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I began my journey in mobile development out of curiosity for how apps shape everyday experiences—right from our pockets. My first step was learning <strong className="text-white">Kotlin</strong> and building native Android apps, which gave me a solid foundation in user interface design, local databases, and backend integration.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently, I&apos;m focused on <strong className="text-white">Flutter and Dart</strong> to expand my skills in cross-platform app development. So far, I&apos;ve built two full-cycle mobile applications as academic projects—each grounded in real-world use cases and designed with clean, maintainable code in mind.
              </p>
            </div>
            
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Benedict Nacor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 