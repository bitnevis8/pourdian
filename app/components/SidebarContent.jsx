'use client';

import Image from 'next/image';
import ChatBox from './ChatBox';
import { useLanguage } from '../context/LanguageContext';
import VantaBadge from './VantaBadge';
// import VantaBackground from './VantaBackground';
import ProjectCard from './ProjectCard';

export const AboutContent = () => {
  const { t, isRtl } = useLanguage();
  const alignH2 = isRtl ? 'md:text-right' : 'md:text-left';
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('about.title')}</h2>
      <div className="relative rounded-xl overflow-hidden p-4 md:p-5 bg-white/5 backdrop-blur-sm border border-white/10">
        <p className="text-white/90 leading-relaxed">{t('about.intro')}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-white">{t('about.technicalSkills')}</h3>
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden p-4 md:p-5 bg-white/5 backdrop-blur-sm border border-white/10">
            <h4 className="text-lg font-medium mb-2 text-white">{t('about.programming')}</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Node.js', 'Express.js', 'React', 'Next.js', 'Laravel', 
                'Livewire', 'Alpine.js', 'Vue.js', 'PHP'
              ].map((skill) => (
                <VantaBadge key={skill}>{skill}</VantaBadge>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden p-4 md:p-5 bg-white/5 backdrop-blur-sm border border-white/10">
            <h4 className="text-lg font-medium mb-2 text-white">{t('about.webDesign')}</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'TailwindCSS',
                'Bootstrap', 'Materialize CSS', 'Semantic UI', 'Foundation'
              ].map((skill) => (
                <VantaBadge key={skill}>{skill}</VantaBadge>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden p-4 md:p-5 bg-white/5 backdrop-blur-sm border border-white/10">
            <h4 className="text-lg font-medium mb-2 text-white">{t('about.networkSystems')}</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Network+', 'Mikrotik MTCNA', 'Linux Essential', 'MySQL', 'MongoDB'
              ].map((skill) => (
                <VantaBadge key={skill}>{skill}</VantaBadge>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden p-4 md:p-5 bg-white/5 backdrop-blur-sm border border-white/10">
            <h4 className="text-lg font-medium mb-2 text-white">{t('about.designCMS')}</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'WordPress', 'MyBB', '3DS Max', 'Maya', 'Photoshop'
              ].map((skill) => (
                <VantaBadge key={skill}>{skill}</VantaBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-8">
        <ChatBox />
      </div> */}
    </div>
  );
};

export const ResumeContent = () => {
  const { t, isRtl } = useLanguage();
  const alignH2 = isRtl ? 'md:text-right' : 'md:text-left';
  return (
  <div className="space-y-6">
    <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('resume.title')}</h2>
    <div className="space-y-4">
      {[
        'itManagerDev1',
        'itManagerDev2',
        'developer1',
        'support1',
        'automation1',
        'android1',
      ].map((key) => (
        <div key={key} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
          <h3 className="text-xl font-semibold text-white">{t(`resume.items.${key}.title`)}</h3>
          <p className="text-white/80">{t(`resume.items.${key}.company`)}</p>
          <ul className="list-disc list-inside mt-2 text-white/90 space-y-1">
            {[0,1,2].map((i) => (
              <li key={i}>{t(`resume.items.${key}.bullets.${i}`)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-white">{t('resume.educationTitle')}</h3>
      <div className="space-y-4">
        {[0,1,2,3].map((i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
            <h4 className="text-xl font-semibold text-white">{t(`resume.education.${i}.title`)}</h4>
            <p className="text-white/80">{t(`resume.education.${i}.place`)}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export const PortfolioContent = () => {
  const { t, isRtl } = useLanguage();
  const alignH2 = isRtl ? 'md:text-right' : 'md:text-left';
  const projects = [
    {
      key: 'crm',
      imageSrc: '/crm-pourdian.png',
      href: 'https://crm.pourdian.com',
      chips: ['Next.js', 'CRM', 'Dashboard', 'Inventory'],
    },
    {
      key: 'cal',
      imageSrc: '/cal-afg.png',
      href: 'https://cal.afg-insp.ir',
      chips: ['Next.js', 'Calculator', 'Pricing', 'Reports'],
    },
    {
      key: 'car',
      imageSrc: '/car-afg.png',
      href: 'https://car.afg-insp.ir',
      chips: ['Automation', 'Inspection', 'PWA', 'Workflow'],
    },
    {
      key: 'taganeh',
      imageSrc: '/taganeh.png',
      href: 'https://taganeh.com',
      chips: ['Search', 'News', 'Aggregation', 'SEO'],
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('portfolio.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.key}
            imageSrc={project.imageSrc}
            imageAlt={t(`portfolio.${project.key}Title`)}
            title={t(`portfolio.${project.key}Title`)}
            description={t(`portfolio.${project.key}Desc`)}
            chips={project.chips}
            href={project.href}
            visitLabel={t('portfolio.visit')}
          />
        ))}
      </div>
    </div>
  );
};

export const CertificationsContent = () => {
  const { t, isRtl } = useLanguage();
  const alignH2 = isRtl ? 'md:text-right' : 'md:text-left';
  return (
  <div className="space-y-6">
    <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('certifications.title')}</h2>
    <div className="space-y-4">
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold text-white">Network+ Certification</h3>
        <p className="text-white/80">CompTIA • 2023</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold text-white">Mikrotik MTCNA Certification</h3>
        <p className="text-white/80">Mikrotik • 2023</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold text-white">Linux Essential</h3>
        <p className="text-white/80">Linux Professional Institute • 2023</p>
      </div>
    </div>
  </div>
);
};

export const LanguagesContent = () => {
  const { t, isRtl, locale, setLocale, locales, localeMeta } = useLanguage();
  const alignH2 = isRtl ? 'md:text-right' : 'md:text-left';
  return (
  <div className="space-y-6">
    <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('languages.title')}</h2>

    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
      <h3 className="text-lg font-semibold mb-3 text-white">{t('languages.choose')}</h3>
      <div className="grid grid-cols-2 gap-2">
        {locales.map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded-lg px-3 py-3 text-sm font-medium transition-all ${
              locale === code
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/10 text-white/90 hover:bg-white/20'
            }`}
          >
            {localeMeta[code].label}
          </button>
        ))}
      </div>
    </div>

    <div className="space-y-3">
      {['fa', 'en', 'ar', 'ru'].map((code) => (
        <div key={code} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
          <h3 className="text-xl font-semibold text-white">{t(`languages.${code}`)}</h3>
        </div>
      ))}
    </div>
  </div>
);
};
