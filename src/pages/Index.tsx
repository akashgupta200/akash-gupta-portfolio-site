
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Sun, Moon, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Akash_Gupta_Resume.pdf';
    link.download = 'Akash_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>
              Akash Gupta
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection('about')}
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                >
                  Projects
                </button>
                <button
                  onClick={() => window.open('https://akora-knowledge-base.vercel.app/', '_blank')}
                  className={`flex items-center space-x-1 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                >
                  <BookOpen size={16} />
                  <span>Documentation</span>
                </button>
              </div>
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
                className={`${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors duration-300`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/lovable-uploads/f1cf3515-e892-433e-8a1b-a18cbdc24020.png"
                alt="Akash Gupta"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Hi, I'm <span className="text-blue-600">Akash Gupta</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
              Full Stack Developer passionate about building scalable web applications and cloud solutions
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/gupta19akash"
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors duration-300`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-gupta-5b5885221/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors duration-300`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:gupta19akash@gmail.com"
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors duration-300`}
              >
                <Mail size={24} />
              </a>
              <button
                onClick={() => window.open('https://akora-knowledge-base.vercel.app/', '_blank')}
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors duration-300`}
              >
                <BookOpen size={24} />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View My Work
              </Button>
              <Button
                onClick={handleResumeDownload}
                variant="outline"
                className={`${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors duration-300`}
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              About Me
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
              I'm a passionate Full Stack Developer with expertise in modern web technologies and cloud platforms. 
              I love creating efficient, scalable solutions and have a strong background in both frontend and backend development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                Skills & Technologies
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} transition-colors duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} transition-colors duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                    Cloud & DevOps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Docker', 'Git', 'CI/CD', 'Linux'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} transition-colors duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                What I Do
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                    Web Development
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                    Building responsive, user-friendly web applications with modern frameworks and best practices.
                  </p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                    Cloud Solutions
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                    Designing and implementing scalable cloud architectures using AWS services.
                  </p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                    Documentation
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                    Creating comprehensive technical documentation and knowledge bases. Check out my{' '}
                    <a
                      href="https://akora-knowledge-base.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Akora Knowledge Base
                    </a>
                    {' '}for cloud and database documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Experience
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 shadow-lg transition-colors duration-300`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                    Full Stack Developer
                  </h3>
                  <p className="text-blue-600 font-semibold">Freelance</p>
                </div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  2023 - Present
                </span>
              </div>
              <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                <li>Developed and deployed full-stack web applications using React, Node.js, and cloud services</li>
                <li>Implemented responsive designs and optimized application performance</li>
                <li>Collaborated with clients to understand requirements and deliver solutions</li>
                <li>Created comprehensive documentation and knowledge bases</li>
              </ul>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 shadow-lg transition-colors duration-300`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                    Web Development Intern
                  </h3>
                  <p className="text-blue-600 font-semibold">Various Companies</p>
                </div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  2022 - 2023
                </span>
              </div>
              <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                <li>Gained hands-on experience with modern web development technologies</li>
                <li>Participated in code reviews and learned best practices</li>
                <li>Contributed to team projects and learned agile development methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Featured Projects
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
              Here are some of the projects I've worked on that showcase my skills and experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                Akora Knowledge Base
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>
                Comprehensive documentation website for cloud technologies and database management systems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://akora-knowledge-base.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                E-commerce Platform
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>
                Full-stack e-commerce solution with user authentication, product management, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Node.js', 'MongoDB', 'Express.js'].map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/gupta19akash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                View Code <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                Task Management App
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>
                Collaborative task management application with real-time updates and team collaboration features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Firebase', 'Material-UI', 'Real-time'].map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/gupta19akash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                View Code <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Let's Work Together
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:gupta19akash@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/akash-gupta-5b5885221/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border px-8 py-3 rounded-lg font-semibold transition-colors duration-300`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
              © 2024 Akash Gupta. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
