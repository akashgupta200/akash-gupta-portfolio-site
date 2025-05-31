import { useState, useEffect } from 'react';
import { 
  Database, 
  Cloud, 
  Code, 
  Server, 
  Terminal, 
  GitBranch, 
  Settings, 
  Monitor, 
  Wrench,
  Users,
  Cpu,
  HardDrive,
  Globe,
  Shield,
  ExternalLink,
  Download
} from 'lucide-react';

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

  const handleResumeDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume/Akash_Gupta_Resume.pdf';
    link.download = 'Akash_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillsData = [
    {
      category: 'Programming Languages & Tools',
      items: [
        { name: 'C', icon: Code },
        { name: 'C++', icon: Code },
        { name: 'HTML', icon: Globe },
        { name: 'CSS', icon: Globe },
        { name: 'SQL', icon: Database },
        { name: 'Verilog', icon: Cpu },
        { name: 'System Verilog', icon: Cpu }
      ]
    },
    {
      category: 'Cloud Platforms',
      items: [
        { name: 'AWS', icon: Cloud },
        { name: 'Azure', icon: Cloud },
        { name: 'OCI', icon: Cloud }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'Oracle', icon: Database },
        { name: 'PostgreSQL', icon: Database },
        { name: 'SQL Server', icon: Database },
        { name: 'RDS', icon: Server },
        { name: 'DynamoDB', icon: HardDrive },
        { name: 'ElastiCache', icon: HardDrive },
        { name: 'Aurora', icon: Database }
      ]
    },
    {
      category: 'Automation',
      items: [
        { name: 'Bash Scripting', icon: Terminal },
        { name: 'Ansible', icon: Settings }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: GitBranch },
        { name: 'Jenkins', icon: Settings },
        { name: 'Nagios', icon: Monitor },
        { name: 'OEM', icon: Monitor },
        { name: 'Toad', icon: Wrench },
        { name: 'SQL Developer', icon: Wrench },
        { name: 'pgAdmin', icon: Wrench },
        { name: 'Putty', icon: Terminal },
        { name: 'DBeaver', icon: Wrench },
        { name: 'Erwin Data Modeler', icon: Wrench }
      ]
    },
    {
      category: 'Operating Systems',
      items: [
        { name: 'Windows', icon: Monitor },
        { name: 'Linux', icon: Terminal }
      ]
    }
  ];

  const projects = [
    {
      title: "Market Vision Database Management",
      description: "Led seamless database migrations from on-premises data centers to AWS and Azure, including data center decommissioning.",
      technologies: ["AWS", "Azure", "Oracle", "PostgreSQL"],
      highlights: [
        "Led seamless database migrations from on-premises data centers to AWS and Azure, including data center decommissioning",
        "Optimized infrastructure by implementing cost-saving measures such as instance downsizing, disk/space management, and purging/archiving historical data",
        "Performed health checks, monitoring, patching, backups, recovery, UAT refreshes, and performance tuning for multiple clients",
        "Partnered with data specialists to deliver tailored database solutions based on client requirements",
        "Supported the transition to Oracle Autonomous Database, enhancing RPO/RTO and reducing costs and manual effort"
      ]
    },
    {
      title: "CalHEERS Tools Databases Migration",
      description: "Successfully migrated production and sandbox databases including Autosys, ALM, and RTC to cloud platforms.",
      technologies: ["DMS", "Datapump", "Oracle RDS", "Toad"],
      highlights: [
        "Successfully migrated production and sandbox batch server backend database called Autosys through DMS",
        "Successfully migrated production and sandbox application management database called ALM using Datapump, Toad",
        "Successfully migrated production and sandbox ticketing application database called RTC to Oracle RDS"
      ]
    },
    {
      title: "Database Optimization Initiative",
      description: "Established new data models and automated RDS snapshot extraction resulting in $0.3M/year savings.",
      technologies: ["AWS", "CloudWatch", "Jenkins", "S3"],
      highlights: [
        "Established new data models that better aligned with evolving business needs",
        "Led initiative to automate RDS snapshot extraction to S3, resulting in ~$0.3M/year savings in Aurora backup storage costs",
        "Developed a Jenkins job utilizing CloudWatch metrics to capture database health checks, long-running queries, and historical data for PostgreSQL, replicating Oracle's AWR report functionality"
      ]
    },
    {
      title: "CalHEERS DBA Support",
      description: "Comprehensive database administration for 50+ non-prod databases totaling ~100TB.",
      technologies: ["PostgreSQL", "Oracle", "Jenkins", "Bash", "CloudWatch", "Python"],
      highlights: [
        "Supported as a cloud database administrator for CALHEERS production and 50+ non-prod databases of total ~100TB",
        "Engaged in RDS/Aurora Postgres database setup/migration (Tech Refresh)",
        "Took care of 20+ end-to-end feature release processes from DB end (GIT, Jenkins, launchpad, Liquibase, Management)",
        "Designed bash script to automate cross-schema foreign table import in Postgres across all environments",
        "Implemented database code deployment process through Jenkins",
        "Developed AWR equivalent monitoring and database health check report generation job in Postgres using CloudWatch CLI, Python, and Jenkins",
        "Supported in Oracle database migration from Exadata machine to AWS cloud",
        "Managed Active Data Guard broker configuration for real-time reporting and Snapshot database for application testing",
        "Implemented 50+ bash scripts, alerts, and reports as part of cloud cutover activity which helps in standardizing the CALHEERS operations (Automation)",
        "Developed backup automation directly to S3 bucket using OSB in LT environment (Cloud, OSB)",
        "Engaged in space management activity across 49+ databases (Compression, partitioning, Redefinition, Re-organization)",
        "Led database patching activity across more than 90 environments including prod/non-prod/LT/Staging",
        "Managed and set up FGA functionality for critical PII data (Auditing)",
        "Monitored ETL load for DW databases Snowflake (Performance tuning, SQL analysis, OEM, Advisory)",
        "Database patching, switchover, RMAN restore recovery, User management, tablespace management"
      ]
    },
    {
      title: "Large Scale Data Migration",
      description: "Led migration of multiple Oracle databases to Cloud Aurora PostgreSQL with minimal downtime.",
      technologies: ["Oracle", "Aurora PostgreSQL", "Change Data Capture"],
      highlights: [
        "Led the migration of multiple databases from Oracle databases running on on-premises data center to Cloud Aurora Postgres",
        "Ensured minimal downtime using Change Data Capture mechanism and data integrity throughout the migration process"
      ]
    },
    {
      title: "Ansible Automation Tool",
      description: "Designed automation tool from scratch using Bash and Ansible for database administration tasks.",
      technologies: ["Bash", "Ansible", "Linux"],
      highlights: [
        "Designed this tool from scratch using Bash and open-source configuration management tool called Ansible",
        "Set up multiple options like health check, user administration, space alert, etc. Other tasks can also be added"
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
    "Received consolation prize in Techspardha event in NIT Kurukshetra",
    "District Rank 1 in UP Board 12th Examination (2016)",
    "District Rank 2 in UP Board 10th Examination (2014)",
    "Honored by DM and CM for being district topper",
    "Atul Maheshwari Scholarship winner",
    "Participated in various tech contest at school level-PIET, Rem Tech Olympiad, ABESIT",
    "Led cultural program's team at school level and grab district level certificate in speech competition"
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800 backdrop-blur-sm z-50 border-b border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="text-xl font-bold text-green-400">
              AKASH GUPTA
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {['about', 'projects', 'experience', 'education', 'skills', 'awards', 'interests', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 font-medium text-sm ${
                    activeSection === item 
                      ? 'text-green-400 border-b-2 border-green-400' 
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 mt-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 mt-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
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
                  className="block w-full text-left capitalize text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gray-900 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Dark Rectangular Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-12 mb-8 border border-gray-700 shadow-2xl animate-fade-in relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-transparent"></div>
            
            {/* Profile Picture */}
            <div className="mb-8 relative z-10">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
                <img 
                  src="/lovable-uploads/f1cf3515-e892-433e-8a1b-a18cbdc24020.png" 
                  alt="Akash Gupta" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-light text-gray-100 mb-6 tracking-wide relative z-10">
              AKASH GUPTA
            </h1>
            
            <div className="flex items-center justify-center mb-8 relative z-10">
              <div className="h-px bg-gray-600 w-20"></div>
              <div className="mx-6 px-6 py-2 bg-green-600 text-white text-sm font-medium tracking-wider rounded">
                ORACLE DBA • POSTGRES DBA • CLOUD ENGINEER
              </div>
              <div className="h-px bg-gray-600 w-20"></div>
            </div>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light relative z-10">
              Database Administrator @ McKinsey & Company<br/>
              B.Tech in ECE from NIT Kurukshetra<br/>
              <span className="text-green-400 font-medium">+91-9729044816 • akashgupta.tech00@gmail.com</span>
            </p>
          </div>
          
          {/* Navigation Icons */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            {[
              { icon: '💼', label: 'PROJECTS', section: 'projects' },
              { icon: '👨‍💼', label: 'EXPERIENCE', section: 'experience' },
              { icon: '📄', label: 'RESUME', section: 'resume', action: 'download' },
              { icon: 'ℹ️', label: 'ABOUT', section: 'about' },
              { icon: '✉️', label: 'CONTACT', section: 'contact' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => item.action === 'download' ? handleResumeDownload() : scrollToSection(item.section)}
                className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl mb-2 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-gray-400 tracking-wider">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 text-center mb-12 tracking-wide">ABOUT ME</h2>
          
          <div className="bg-gray-700 rounded-lg shadow-sm p-8 border border-gray-600">
            <p className="text-base text-gray-300 leading-relaxed mb-6 font-light">
              I have extensive experience in database administration for Oracle and Postgres, with a strong focus on ensuring high availability, performance optimization, and data integrity. Additionally, I possess significant expertise in cloud technologies, including AWS and Azure, enabling seamless database migrations, infrastructure management and cost optimization.
            </p>
            
            <p className="text-base text-gray-300 leading-relaxed font-light">
              My skill set also includes automation through Bash scripting, streamlining operational tasks and enhancing efficiency. I am passionate about leveraging cutting-edge technologies to solve complex business challenges and drive operational excellence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-medium tracking-wide text-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD RESUME
              </button>
              <a 
                href="https://akora-knowledge-base.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium tracking-wide text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                DB/CLOUD KNOWLEDGE DOCUMENTATION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 text-center mb-12 tracking-wide">PROJECTS & WORK</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-medium text-green-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm font-light">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-200 mb-2 text-sm">Key Contributions:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 text-xs flex items-start font-light">
                        <span className="text-green-400 mr-2">❖</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-green-600 text-white rounded text-xs font-medium">
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
      <section id="experience" className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 text-center mb-12 tracking-wide">EXPERIENCE</h2>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-700 rounded-lg shadow-sm p-6 border border-gray-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-green-400">{exp.role}</h3>
                    <p className="text-gray-200 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-gray-400 font-medium mt-2 md:mt-0 text-sm">{exp.duration}</span>
                </div>
                <p className="text-gray-300 leading-relaxed font-light text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 text-center mb-12 tracking-wide">EDUCATION</h2>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-green-400">{edu.institution}</h3>
                    <p className="text-gray-200 font-medium">{edu.degree}</p>
                    {edu.field && <p className="text-gray-400 text-sm">{edu.field}</p>}
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-400 font-medium text-sm">{edu.duration}</p>
                    <p className="text-green-400 font-medium text-sm">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 text-center mb-12 tracking-wide">SKILLS</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skillCategory, index) => (
              <div key={index} className="bg-gray-700 rounded-lg shadow-sm p-6 border border-gray-600">
                <h3 className="text-base font-medium text-green-400 mb-4 text-center">{skillCategory.category}</h3>
                <div className="space-y-3">
                  {skillCategory.items.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skillIndex} className="flex items-center space-x-3 p-2 bg-gray-800 rounded">
                        <IconComponent className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 text-center mb-12 tracking-wide">AWARDS & CERTIFICATIONS</h2>
          
          <div className="grid md:grid-cols-2 gap-3">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-700 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">🏆</span>
                  <p className="text-gray-300 font-light text-sm">{award}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 text-center mb-12 tracking-wide">INTERESTS</h2>
          
          <div className="bg-gray-700 rounded-lg shadow-sm p-8 border border-gray-600">
            <div className="space-y-6 text-base text-gray-300 leading-relaxed font-light">
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
      <section id="contact" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-100 mb-8 tracking-wide">LET'S CONNECT</h2>
          <p className="text-lg text-gray-400 mb-12 font-light">
            Ready to discuss database solutions and cloud innovations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">✉️</span>
              </div>
              <h3 className="text-gray-200 font-medium mb-2">Email</h3>
              <p className="text-gray-400 text-sm">akashgupta.tech00@gmail.com</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">📱</span>
              </div>
              <h3 className="text-gray-200 font-medium mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+91-9729044816</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">📍</span>
              </div>
              <h3 className="text-gray-200 font-medium mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Gurgaon, India</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://akashgupta200.github.io/Resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 4v16h24v-16h-24zm22 2l-10 6-10-6h20zm-20 12v-10l8 5 4-2.5 8 5v2.5h-20z"/>
              </svg>
            </a>
            <a 
              href="mailto:akashgupta.tech00@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 4v16h24v-16h-24zm22 2l-10 6-10-6h20zm-20 12v-10l8 5 4-2.5 8 5v2.5h-20z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm font-light">
            © 2024 Akash Gupta. All rights reserved. Built with modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
