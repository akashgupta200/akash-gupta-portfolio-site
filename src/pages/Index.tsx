
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, FileText, User, Briefcase, BookOpen, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Akash_Gupta_Resume.pdf';
    link.download = 'Akash_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    cloud: ['AWS (EC2, S3, RDS, Lambda)', 'Azure', 'Google Cloud Platform (GCP)', 'Oracle Cloud Infrastructure (OCI)'],
    databases: ['Oracle Database (11g, 12c, 19c)', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    programming: ['SQL', 'PL/SQL', 'Python', 'Shell Scripting', 'JavaScript', 'React'],
    tools: ['Oracle Enterprise Manager', 'RMAN', 'Data Guard', 'Golden Gate', 'Terraform', 'Docker', 'Kubernetes']
  };

  const experience = [
    {
      title: "Database Administrator",
      company: "Accenture",
      period: "2022 - Present",
      description: "Managing and optimizing Oracle databases, implementing backup strategies, and ensuring high availability.",
      achievements: [
        "Reduced database downtime by 40% through proactive monitoring",
        "Implemented automated backup solutions",
        "Managed 50+ production databases"
      ]
    },
    {
      title: "Associate Database Administrator", 
      company: "Previous Organization",
      period: "2020 - 2022",
      description: "Assisted in database maintenance, performance tuning, and troubleshooting.",
      achievements: [
        "Improved query performance by 35%",
        "Automated routine maintenance tasks",
        "Supported database migrations"
      ]
    }
  ];

  const projects = [
    {
      title: "CalHEERS Database Support",
      description: "Comprehensive DBA support for California's health insurance marketplace",
      details: [
        "Provided 24/7 production database support for critical healthcare applications",
        "Managed Oracle 19c databases with high availability requirements",
        "Implemented automated monitoring and alerting systems",
        "Performed regular health checks and performance optimization",
        "Executed database patching and upgrades with zero downtime",
        "Coordinated with application teams for deployment support",
        "Maintained disaster recovery procedures and backup strategies",
        "Resolved critical production issues within SLA requirements",
        "Documented procedures and maintained runbooks for operations team"
      ],
      technologies: ["Oracle 19c", "Data Guard", "RMAN", "Enterprise Manager", "Linux"]
    },
    {
      title: "Cloud Database Migration",
      description: "Migrated on-premises Oracle databases to AWS RDS",
      details: [
        "Planned and executed migration of 20+ databases to cloud",
        "Implemented automated backup and monitoring solutions",
        "Reduced infrastructure costs by 30%",
        "Ensured zero data loss during migration"
      ],
      technologies: ["AWS RDS", "Oracle", "Python", "Terraform"]
    },
    {
      title: "Performance Optimization Initiative",
      description: "Database performance tuning and optimization project",
      details: [
        "Analyzed and optimized slow-running queries",
        "Implemented indexing strategies",
        "Reduced average response time by 50%",
        "Created performance monitoring dashboards"
      ],
      technologies: ["Oracle", "SQL Tuning", "AWR", "Enterprise Manager"]
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            <div className="max-w-6xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight">
                      Akash Gupta
                    </h1>
                    <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                      Database Administrator & Cloud Engineer
                    </p>
                    <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                      Passionate about database optimization, cloud technologies, and building scalable solutions. 
                      Specialized in Oracle databases and cloud infrastructure management.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => setActiveSection('about')}
                      className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <User className="mr-2 h-5 w-5" />
                      About Me
                    </Button>
                    <Button 
                      onClick={handleDownloadResume}
                      variant="outline"
                      className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-slate-900 px-8 py-3 rounded-xl font-medium transition-all duration-300"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Resume
                    </Button>
                  </div>

                  <div className="flex space-x-6">
                    <a href="mailto:akashgupta.tech00@gmail.com" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                      <Mail className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com/in/akash-gupta" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/akashgupta" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                      <Github className="h-6 w-6" />
                    </a>
                    <a href="https://akora-knowledge-base.vercel.app/" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                      <BookOpen className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
                    <img 
                      src="/lovable-uploads/f1cf3515-e892-433e-8a1b-a18cbdc24020.png"
                      alt="Akash Gupta"
                      className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  I'm a dedicated Database Administrator with expertise in Oracle databases and cloud technologies. 
                  Passionate about optimizing database performance and implementing scalable solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">Professional Journey</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
                    <p className="leading-relaxed">
                      With over 4 years of experience in database administration and cloud technologies, 
                      I specialize in Oracle database management, performance optimization, and cloud migrations.
                    </p>
                    <p className="leading-relaxed">
                      Currently working at Accenture, I manage critical production databases and ensure 
                      high availability for enterprise applications.
                    </p>
                    <div className="pt-4">
                      <a 
                        href="https://akora-knowledge-base.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                      >
                        <BookOpen className="mr-2 h-5 w-5" />
                        View My Knowledge Documentation
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                      <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span>akashgupta.tech00@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                      <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span>+91 XXX XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                      <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span>India</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="databases" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-slate-100 dark:bg-slate-700">
                      <TabsTrigger value="databases" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600">Databases</TabsTrigger>
                      <TabsTrigger value="cloud" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600">Cloud</TabsTrigger>
                      <TabsTrigger value="programming" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600">Programming</TabsTrigger>
                      <TabsTrigger value="tools" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600">Tools</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(skills).map(([category, skillList]) => (
                      <TabsContent key={category} value={category} className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {skillList.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="p-3 text-sm bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Professional Experience</h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  My journey in database administration and cloud technologies
                </p>
              </div>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white dark:bg-slate-800">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-slate-800 dark:text-white">{exp.title}</CardTitle>
                          <CardDescription className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="border-indigo-200 text-indigo-700 dark:border-indigo-700 dark:text-indigo-300">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start">
                              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Featured Projects</h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Showcasing my work in database administration and cloud technologies
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white dark:bg-slate-800 hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Project Details:</h4>
                        <ul className="space-y-1 text-sm">
                          {project.details.map((detail, i) => (
                            <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start">
                              <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1.5 text-xs">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">Akash Gupta</h1>
              <div className="hidden md:flex space-x-6">
                {[
                  { id: 'home', label: 'Home', icon: User },
                  { id: 'about', label: 'About', icon: FileText },
                  { id: 'experience', label: 'Experience', icon: Briefcase },
                  { id: 'projects', label: 'Projects', icon: Github },
                  { id: 'docs', label: 'Docs', icon: BookOpen, href: 'https://akora-knowledge-base.vercel.app/' }
                ].map((item) => (
                  item.href ? (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center space-x-2 font-medium transition-colors ${
                        activeSection === item.id 
                          ? 'text-indigo-600 dark:text-indigo-400' 
                          : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  )
                ))}
              </div>
            </div>
            
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;
