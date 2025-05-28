
import { useState, useEffect } from 'react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 85 }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment integration, and admin panel.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/akashgupta200",
      live: "https://akashgupta200.github.io/Resume/",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/akashgupta200",
      live: "https://akashgupta200.github.io/Resume/",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and historical data visualization.",
      technologies: ["Vanilla JS", "Chart.js", "Weather API"],
      github: "https://github.com/akashgupta200",
      live: "https://akashgupta200.github.io/Resume/",
      featured: false
    },
    {
      title: "Personal Blog Platform",
      description: "Content management system with markdown support and SEO optimization.",
      technologies: ["React", "Node.js", "MongoDB", "Markdown"],
      github: "https://github.com/akashgupta200",
      live: "https://akashgupta200.github.io/Resume/",
      featured: false
    }
  ];

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      credentialId: "FSW-2023-001",
      link: "https://coursera.org/verify/FSW-2023-001"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "REACT-META-2023",
      link: "https://coursera.org/verify/REACT-META-2023"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "JS-ALGO-2022",
      link: "https://freecodecamp.org/certification/akashgupta/javascript-algorithms-and-data-structures"
    },
    {
      title: "Node.js Application Development",
      issuer: "IBM",
      date: "2023",
      credentialId: "NODE-IBM-2023",
      link: "https://ibm.com/verify/NODE-IBM-2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Akash Gupta
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item 
                      ? 'text-purple-400' 
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              {['home', 'about', 'experience', 'projects', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-white hover:text-purple-300 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                AG
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Akash Gupta
          </h1>
          
          <h2 className="text-xl md:text-2xl text-purple-300 mb-8 animate-fade-in">
            Full Stack Developer & Software Engineer
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Passionate about creating innovative web solutions with modern technologies. 
            Specialized in JavaScript, React, Node.js, and building scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating user-friendly applications that solve real-world problems and 
                provide exceptional user experiences.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                With a strong foundation in both frontend and backend development, I enjoy 
                working on challenging projects that push the boundaries of what's possible 
                on the web.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Express.js</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Experience</h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Senior Full Stack Developer</h3>
                  <p className="text-purple-300">Tech Solutions Inc.</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2022 - Present</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Led development of multiple web applications using React, Node.js, and MongoDB. 
                Collaborated with cross-functional teams to deliver high-quality solutions on time.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                  <p className="text-purple-300">Digital Agency Pro</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2021 - 2022</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Developed responsive websites and web applications using modern JavaScript frameworks. 
                Focused on creating intuitive user interfaces and optimizing performance.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Junior Web Developer</h3>
                  <p className="text-purple-300">StartUp Innovations</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2020 - 2021</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Started my professional journey building websites and learning modern development practices. 
                Gained experience in HTML, CSS, JavaScript, and basic backend technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 ${project.featured ? 'md:col-span-2' : ''}`}>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                  >
                    GitHub →
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors duration-300 font-medium"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/akashgupta200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Certificates & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-purple-300 font-medium">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  Credential ID: {cert.credentialId}
                </p>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium group"
                >
                  Verify Certificate 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">Professional Documentation</h3>
              <p className="text-gray-300 mb-4">
                View my complete professional documentation, project details, and technical specifications
              </p>
              <a 
                href="https://akashgupta200.github.io/Resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                📋 View Complete Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">akashgupta200@email.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+91 9876543210</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">India</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/akashgupta200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/akashgupta200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/akashgupta200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Akash Gupta. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
