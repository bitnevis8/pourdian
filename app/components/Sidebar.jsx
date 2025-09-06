'use client';
import { useState, useRef, useEffect } from 'react';
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
  PricingTermsContent,
} from './SidebarContent';
import { useLanguage } from '../context/LanguageContext';
import dynamic from 'next/dynamic';

const VantaBackground = dynamic(() => import('./VantaBackground'), { ssr: false });

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();
  const clickAudioRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!clickAudioRef.current) {
      const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
      audio.preload = 'auto';
      audio.volume = 0.25;
      clickAudioRef.current = audio;
    }
  }, []);

  const playClick = () => {
    try {
      const audio = clickAudioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    } catch (_) {}
  };

  const sections = [
    { id: 'about', icon: <BsPerson />, title: t('nav.about') },
    { id: 'resume', icon: <MdWork />, title: t('nav.resume') },
    { id: 'portfolio', icon: <MdWork />, title: t('nav.portfolio') },
    { id: 'certifications', icon: <MdSchool />, title: t('nav.certifications') },
    { id: 'languages', icon: <MdLanguage />, title: t('nav.languages') },
    { id: 'pricing', icon: <MdWork />, title: t('nav.pricing') },
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/hossein-pourdian-b790411a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
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
      case 'pricing':
        return <PricingTermsContent />;
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
      <div className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-900/70 via-gray-800/60 to-gray-900/70 backdrop-blur-md text-white p-4 flex flex-col transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
        <div className="absolute inset-0 -z-10 rounded-lg opacity-70">
          <VantaBackground effect="clouds" options={{ skyColor: 0x0b1220, cloudColor: 0x1f3a8a, cloudShadowColor: 0x0b1220, sunGlareColor: 0x334155, sunlightColor: 0x93c5fd }} />
        </div>
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
                playClick();
                setActiveSection(section.id);
                setIsSidebarOpen(false);
              }}
              className={`relative overflow-hidden w-full p-2 rounded-lg mb-2 transition-all duration-300 select-none ${
                activeSection === section.id
                  ? 'text-white shadow-lg shadow-blue-500/20'
                  : 'text-white/90 hover:text-white hover:bg-white/25 hover:backdrop-blur-md hover:shadow hover:shadow-white/10'
              }`}
            >
              {activeSection === section.id && (
                <div className="absolute inset-0 -z-10 rounded-lg">
                  <VantaBackground effect="fog" options={{ highlightColor: 0x93c5fd, midtoneColor: 0x3b82f6, lowlightColor: 0x1e3a8a, baseColor: 0x0f172a, blurFactor: 0.6 }} />
                </div>
              )}
              <div className="relative z-10 flex items-center gap-2 w-full">
                <span className="text-xl">{section.icon}</span>
                <span>{section.title}</span>
              </div>
            </button>
          ))}
        </nav>

        <div className="mt-4 relative z-10">
          <div className="relative overflow-hidden rounded-lg shadow-lg shadow-green-500/20">
            <div className="absolute inset-0 -z-10">
              <VantaBackground effect="fog" options={{ highlightColor: 0x22c55e, midtoneColor: 0x16a34a, lowlightColor: 0x14532d, baseColor: 0x052e16, blurFactor: 0.6 }} />
            </div>
            <a 
              href="/resume.pdf" 
              download
              className="relative z-10 block w-full text-center p-2 rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 justify-center">
                <MdDownload />
                <span>{t('nav.downloadResume')}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-4 relative z-10">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-all duration-300 hover:scale-110 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-[2px] hover:backdrop-blur-sm"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2 relative z-10">
          <button
            onClick={() => setLocale('fa')}
            className={`px-3 py-1 rounded ${locale === 'fa' ? 'bg-blue-600 text-white' : 'bg-white/10'}`}
            title="فارسی"
          >{t('nav.switchToFA')}</button>
          <button
            onClick={() => setLocale('en')}
            className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-blue-600 text-white' : 'bg-white/10'}`}
            title="English"
          >{t('nav.switchToEN')}</button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex-1 overflow-hidden">
        <VantaBackground effect="net" />
        <div className="relative p-4 md:p-8 overflow-y-auto h-full text-white bg-gradient-to-br from-blue-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 