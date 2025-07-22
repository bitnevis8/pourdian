'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdWork, MdSchool, MdLanguage, MdDownload, MdMenu, MdClose } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import {
  AboutContent,
  ResumeContent,
  PortfolioContent,
  CertificationsContent,
  LanguagesContent,
} from './SidebarContent';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: 'about', icon: <BsPerson />, title: 'About Me' },
    { id: 'resume', icon: <MdWork />, title: 'Resume' },
    { id: 'portfolio', icon: <MdWork />, title: 'Portfolio' },
    { id: 'certifications', icon: <MdSchool />, title: 'Certifications' },
    { id: 'languages', icon: <MdLanguage />, title: 'Languages' },
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/hossein-pourdian-b790411a8/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:hpourdian@gmail.com', 
      label: 'Email' 
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-6 z-50">
            <div className="md:hidden flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/20">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Hossein Pourdian</h1>
              <p className="text-gray-600 text-sm text-center">Full Stack Developer</p>
            </div>
            <AboutContent />
          </div>
        );
      case 'resume':
        return <ResumeContent />;
      case 'portfolio':
        return <PortfolioContent />;
      case 'certifications':
        return <CertificationsContent />;
      case 'languages':
        return <LanguagesContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/20 backdrop-blur-sm text-gray-800 shadow-lg hover:bg-white/30 transition-all duration-300"
      >
        {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white p-4 flex flex-col transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
        <div className="flex flex-col items-center mb-8 relative z-10 pt-12 md:pt-0">
          <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/20">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Hossein Pourdian</h1>
          <p className="text-gray-300 text-sm text-center">Full Stack Developer</p>
        </div>

        <nav className="flex-1 relative z-10">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg mb-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </nav>

        <div className="mt-4 relative z-10">
          <a 
            href="/resume.pdf" 
            download
            className="w-full flex items-center justify-center space-x-2 p-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg shadow-green-500/20"
          >
            <MdDownload />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="mt-4 flex justify-center space-x-4 relative z-10">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-all duration-300 hover:scale-110"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar; 