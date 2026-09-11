'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdWork, MdSchool, MdLanguage, MdFolder } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import {
  AboutContent,
  ResumeContent,
  PortfolioContent,
  CertificationsContent,
  LanguagesContent,
} from './SidebarContent';
import { useLanguage } from '../context/LanguageContext';
import dynamic from 'next/dynamic';

const VantaBackground = dynamic(() => import('./VantaBackground'), { ssr: false });

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { t, locale, setLocale, locales, localeMeta } = useLanguage();
  const clickAudioRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!clickAudioRef.current) {
      const audio = new Audio('/mixkit-sci-fi-click-900.wav');
      audio.preload = 'auto';
      audio.volume = 0.25;
      clickAudioRef.current = audio;
    }
  }, []);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

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
    { id: 'about', icon: <BsPerson />, titleKey: 'about' },
    { id: 'resume', icon: <MdWork />, titleKey: 'resume' },
    { id: 'portfolio', icon: <MdFolder />, titleKey: 'portfolio' },
    { id: 'certifications', icon: <MdSchool />, titleKey: 'certifications' },
    { id: 'languages', icon: <MdLanguage />, titleKey: 'languages' },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/hossein-pourdian-b790411a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:hpourdian@gmail.com',
      label: 'Email',
    },
  ];

  const goTo = (id) => {
    playClick();
    setActiveSection(id);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutContent />;
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

  const LanguageChips = ({ className = '' }) => (
    <div className={`flex flex-wrap justify-center gap-1.5 ${className}`}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => {
            playClick();
            setLocale(code);
          }}
          className={`min-w-[2.75rem] rounded-md px-2.5 py-1.5 text-xs font-medium transition-all ${
            locale === code
              ? 'bg-blue-600 text-white shadow shadow-blue-500/30'
              : 'bg-white/10 text-white/85 hover:bg-white/20'
          }`}
          title={localeMeta[code].label}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const ProfileBlock = ({ compact = false }) => (
    <div className={`flex flex-col items-center ${compact ? 'gap-2' : 'mb-5 gap-3'}`}>
      <div
        className={`relative rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/20 ${
          compact ? 'h-16 w-16' : 'h-28 w-28 lg:h-32 lg:w-32'
        }`}
      >
        <Image src="/profile.jpg" alt="Profile Picture" fill className="object-cover" priority />
      </div>
      <div className="text-center px-1">
        <h1
          className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 ${
            compact ? 'text-lg' : 'text-xl lg:text-2xl'
          }`}
        >
          Hossein Pourdian
        </h1>
        <p className={`text-gray-300 ${compact ? 'text-xs' : 'text-sm'}`}>{t('role')}</p>
      </div>
    </div>
  );

  return (
    <div className="relative flex h-[100dvh] flex-col md:flex-row overflow-hidden">
      <VantaBackground
        effect="net"
        color={0x34e3d8}
        options={{
          maxDistance: typeof window !== 'undefined' && window.innerWidth < 768 ? 8.0 : 22.0,
          spacing: typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 13.0,
          showDots: false,
          scaleMobile: 1,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        }}
      />

      {/* Desktop / tablet sidebar — wider, single-line menu rows */}
      <aside className="relative z-40 hidden md:flex w-72 lg:w-80 shrink-0 flex-col bg-gradient-to-br from-blue-900/30 via-gray-800/20 to-gray-900/30 backdrop-blur-md text-white p-5">
        <ProfileBlock />
        <LanguageChips className="mb-5" />
        <nav className="relative z-10 flex flex-1 flex-col gap-1.5">
          {sections.map((section) => {
            const active = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => goTo(section.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-start transition-all duration-200 select-none ${
                  active
                    ? 'bg-blue-900/60 text-white shadow-lg shadow-blue-500/20'
                    : 'text-white/90 hover:bg-blue-800/30 hover:text-white'
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-xl leading-none">
                  {section.icon}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium leading-none lg:text-[0.95rem]">
                  {t(`nav.${section.titleKey}`)}
                </span>
              </button>
            );
          })}
        </nav>
        <div className="relative z-10 mt-4 flex justify-center gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/5 px-2 py-1 text-2xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-blue-400"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </aside>

      {/* Main column */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <header className="md:hidden shrink-0 border-b border-white/10 bg-gradient-to-br from-blue-900/40 via-gray-900/30 to-gray-950/40 backdrop-blur-md px-3 pt-[max(0.5rem,env(safe-area-inset-top))] pb-3">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-blue-400/80">
              <Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                Hossein Pourdian
              </h1>
              <p className="truncate text-xs text-white/70">{t('role')}</p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/10 p-2 text-base text-white/90"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <LanguageChips className="mt-2.5" />
        </header>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain text-white bg-gradient-to-br from-blue-900/25 via-gray-800/15 to-gray-900/25 px-3 py-4 pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:p-8 md:pb-8"
        >
          {activeSection === 'about' && (
            <div className="mb-5 md:hidden">
              <ProfileBlock compact />
            </div>
          )}
          {renderContent()}
        </div>

        {/* Mobile bottom bar — compact icon + short label */}
        <nav
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-gray-950/85 backdrop-blur-xl md:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="mx-auto flex max-w-lg items-stretch">
            {sections.map((section) => {
              const active = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goTo(section.id)}
                  className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-2.5 transition-all ${
                    active ? 'text-cyan-300' : 'text-white/65 active:text-white'
                  }`}
                >
                  <span className="flex h-5 w-5 items-center justify-center text-xl leading-none">
                    {section.icon}
                  </span>
                  <span className="max-w-full truncate text-[10px] leading-none">
                    {t(`nav.${section.titleKey}Short`)}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
