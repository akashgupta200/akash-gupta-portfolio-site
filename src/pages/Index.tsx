
import { useState, useEffect } from 'react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'education', 'skills', 'awards', 'interests', 'contact'];
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
    { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'OCI'] },
    { category: 'Databases', items: ['Oracle', 'PostgreSQL', 'SQL Server', 'RDS', 'Aurora', 'DynamoDB'] },
    { category: 'Programming', items: ['C', 'C++', 'SQL', 'Bash Scripting', 'Python', 'HTML/CSS'] },
    { category: 'Tools', items: ['Git', 'Jenkins', 'Ansible', 'OEM', 'Toad', 'pgAdmin', 'DBeaver'] },
    { category: 'Operating Systems', items: ['Linux', 'Windows'] }
  ];

  const projects = [
    {
      title: "Market Vision Database Management",
      description: "Led seamless database migrations from on-premises to AWS/Azure with infrastructure optimization and cost-saving measures.",
      technologies: ["AWS", "Azure", "Oracle", "PostgreSQL"],
      highlights: [
        "Database migrations to cloud platforms",
        "Infrastructure optimization and cost reduction",
        "Performance tuning for multiple clients",
        "Oracle Autonomous Database transition"
      ]
    },
    {
      title: "CalHEERS Tools Databases Migration",
      description: "Successfully migrated production and sandbox databases including Autosys, ALM, and RTC to cloud platforms.",
      technologies: ["DMS", "Datapump", "Oracle RDS", "Toad"],
      highlights: [
        "Production Autosys migration via DMS",
        "ALM database migration using Datapump",
        "RTC ticketing application to Oracle RDS"
      ]
    },
    {
      title: "Database Optimization Initiative",
      description: "Established new data models and automated RDS snapshot extraction resulting in $0.3M/year savings.",
      technologies: ["AWS", "CloudWatch", "Jenkins", "S3"],
      highlights: [
        "New data models aligned with business needs",
        "Automated RDS snapshot to S3",
        "$0.3M annual savings in backup costs",
        "PostgreSQL health check automation"
      ]
    },
    {
      title: "CalHEERS DBA Support",
      description: "Comprehensive database administration for 50+ non-prod databases totaling ~100TB.",
      technologies: ["PostgreSQL", "Oracle", "Jenkins", "Bash", "CloudWatch"],
      highlights: [
        "Managed 100TB+ database infrastructure",
        "20+ end-to-end feature releases",
        "50+ automation scripts implementation",
        "Database patching across 90+ environments"
      ]
    },
    {
      title: "Large Scale Data Migration",
      description: "Led migration of multiple Oracle databases to Cloud Aurora PostgreSQL with minimal downtime.",
      technologies: ["Oracle", "Aurora PostgreSQL", "Change Data Capture"],
      highlights: [
        "On-premises to cloud migration",
        "Minimal downtime using CDC",
        "Data integrity throughout migration"
      ]
    },
    {
      title: "Ansible Automation Tool",
      description: "Designed automation tool from scratch using Bash and Ansible for database administration tasks.",
      technologies: ["Bash", "Ansible", "Linux"],
      highlights: [
        "Built from scratch automation tool",
        "Health checks and user administration",
        "Space alerts and monitoring"
      ]
    }
  ];

  const experience = [
    {
      company: "McKinsey & Company",
      role: "Database Administrator II",
      location: "Gurgaon, India",
      duration: "09/2024 - Present",
      description: "Leading database administration initiatives for enterprise clients with focus on Oracle and PostgreSQL systems."
    },
    {
      company: "Deloitte",
      role: "Consultant",
      location: "Gurgaon, India", 
      duration: "07/2023 - 09/2024",
      description: "Provided expert consulting services for database optimization and cloud migration projects."
    },
    {
      company: "Deloitte",
      role: "Analyst",
      location: "Gurgaon, India",
      duration: "07/2020 - 07/2023",
      description: "Specialized in database administration, performance tuning, and automation script development."
    },
    {
      company: "MentorGraphics",
      role: "HEP Trainee",
      location: "Noida, India",
      duration: "06/2019 - 07/2019",
      description: "Gained hands-on experience in hardware engineering and database technologies."
    }
  ];

  const education = [
    {
      institution: "National Institute of Technology, Kurukshetra",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      duration: "August 2016 - May 2020",
      grade: "CGPA: 9.5185"
    },
    {
      institution: "Saraswati Vidhya Mandir Inter College, Shamli",
      degree: "Senior Secondary (UP Board)",
      field: "",
      duration: "2016",
      grade: "Percentage: 95%"
    },
    {
      institution: "Saraswati Vidhya Mandir Inter College, Shamli", 
      degree: "Secondary (UP Board)",
      field: "",
      duration: "2014",
      grade: "Percentage: 92%"
    }
  ];

  const awards = [
    "AWS Cloud Practitioner Certificate (CLF-02)",
    "AWS Solution Architect Associate Certificate", 
    "Azure Data Engineer Associate (DP-203) Certificate",
    "Azure Data Fundamentals (DP-900) Certificate",
    "OCI Foundation Certificate",
    "Oracle DBA 11g/12c Certificate from Udemy",
    "Oracle Backup and Recovery Certificate from Udemy",
    "Oracle DataGuard Admin Certificate from Udemy",
    "PostgreSQL DBA Certificate from Udemy",
    "Bash Scripting Certificate from Udemy",
    "SQL Certificate from Udemy",
    "Spot Award in Deloitte",
    "Department Ranker in ECE (130+ students)",
    "DR-2 in 3rd Semester with SGPA 9.8545",
    "DR-2 in 4th Semester with SGPA 9.8519",
    "District Rank 1 in UP Board 12th Examination (2016)",
    "District Rank 2 in UP Board 10th Examination (2014)",
    "Honored by DM and CM for being district topper",
    "Atul Maheshwari Scholarship winner"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 tracking-wide">
              AKASH GUPTA
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'experience', 'education', 'skills', 'awards', 'interests', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 font-medium tracking-wide ${
                    activeSection === item 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              {['about', 'projects', 'experience', 'education', 'skills', 'awards', 'interests', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-2">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-green-600">
                AG
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-wider animate-fade-in">
            AKASH GUPTA
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gray-400 w-24"></div>
            <div className="mx-6 px-6 py-2 bg-green-500 text-white rounded-full font-medium tracking-wider">
              DBA • CLOUD ENGINEER • ORACLE EXPERT
            </div>
            <div className="h-px bg-gray-400 w-24"></div>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Oracle DBA/Postgres DBA/Cloud Engineer @ McKinsey & Company<br/>
            B.Tech in ECE from NIT Kurukshetra<br/>
            <span className="text-green-600 font-medium">+91-9729044816 • ag7088920928@gmail.com</span>
          </p>
          
          {/* Navigation Icons */}
          <div className="flex justify-center space-x-8 animate-fade-in">
            {[
              { icon: '💼', label: 'PROJECTS', section: 'projects' },
              { icon: '👨‍💼', label: 'EXPERIENCE', section: 'experience' },
              { icon: '📄', label: 'RESUME', section: 'about' },
              { icon: 'ℹ️', label: 'ABOUT', section: 'about' },
              { icon: '✉️', label: 'CONTACT', section: 'contact' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-gray-700 tracking-wider">{item.label}</span>
                <span className="text-xs text-gray-500 lowercase">{item.section}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-wide">ABOUT ME</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I have extensive experience in database administration for Oracle and PostgreSQL, with a strong focus on ensuring high availability, performance optimization, and data integrity. Additionally, I possess significant expertise in cloud technologies, including AWS and Azure, enabling seamless database migrations, infrastructure management and cost optimization.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My skill set also includes automation through Bash scripting, streamlining operational tasks and enhancing efficiency. I am passionate about leveraging cutting-edge technologies to solve complex business challenges and drive operational excellence.
            </p>

            <div className="mt-8 text-center">
              <a 
                href="https://akashgupta200.github.io/Resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-medium tracking-wide"
              >
                📋 VIEW COMPLETE DOCUMENTATION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-wide">PROJECTS & WORK</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className="text-green-500 mr-2">❖</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-wide">EXPERIENCE</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-green-600 font-semibold">{exp.company}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-wide">EDUCATION</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                    <p className="text-green-600 font-semibold">{edu.degree}</p>
                    {edu.field && <p className="text-gray-600">{edu.field}</p>}
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-500 font-medium">{edu.duration}</p>
                    <p className="text-gray-700 font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-wide">SKILLS</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-wide">AWARDS & CERTIFICATIONS</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">🏆</span>
                  <p className="text-gray-700 font-medium">{award}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-wide">INTERESTS</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Outside of my professional life as a database administrator, I am passionate about music, both listening and singing. I find joy in exploring different genres and honing my vocal skills. I also enjoy solving puzzles, which helps me sharpen my problem-solving abilities and stay mentally agile.
              </p>
              
              <p>
                When indoors, I am an avid follower of science fiction and fantasy movies and television shows. I am deeply motivated to stay updated with the latest advancements in technology, particularly in the fields of cloud computing and database management. This curiosity drives me to continuously learn and explore innovative solutions in my domain.
              </p>
              
              <p>
                Additionally, I enjoy participating in cultural activities and have a keen interest in public speaking and team leadership. These activities have helped me develop strong communication and collaboration skills, which I bring to both my personal and professional endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-wide">LET'S CONNECT</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to discuss database solutions and cloud innovations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✉️</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Email</h3>
              <p className="text-gray-700">ag7088920928@gmail.com</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Phone</h3>
              <p className="text-gray-700">+91-9729044816</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📍</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Location</h3>
              <p className="text-gray-700">Gurgaon, India</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://akashgupta200.github.io/Resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="mailto:ag7088920928@gmail.com"
              className="text-gray-600 hover:text-green-500 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 4v16h24v-16h-24zm22 2l-10 6-10-6h20zm-20 12v-10l8 5 4-2.5 8 5v2.5h-20z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Akash Gupta. All rights reserved. Built with modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
