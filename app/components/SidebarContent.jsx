'use client';

import Image from 'next/image';
import ChatBox from './ChatBox';
import { useLanguage } from '../context/LanguageContext';
import VantaBadge from './VantaBadge';
import VantaBackground from './VantaBackground';
import ProjectCard from './ProjectCard';

export const AboutContent = () => {
  const { t, locale } = useLanguage();
  const alignH2 = locale === 'fa' ? 'md:text-right' : 'md:text-left';
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('about.title')}</h2>
      <p className="text-white/90 leading-relaxed">{t('about.intro')}</p>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-white">{t('about.technicalSkills')}</h3>
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden p-4 md:p-5 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="absolute inset-0 -z-10 opacity-70">
              <VantaBackground effect="clouds" options={{ skyColor: 0x0b1220, cloudColor: 0x1f3a8a, cloudShadowColor: 0x0b1220, sunGlareColor: 0x334155, sunlightColor: 0x93c5fd }} />
            </div>
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
            <div className="absolute inset-0 -z-10 opacity-70">
              <VantaBackground effect="clouds" options={{ skyColor: 0x0b1220, cloudColor: 0x1f3a8a, cloudShadowColor: 0x0b1220, sunGlareColor: 0x334155, sunlightColor: 0x93c5fd }} />
            </div>
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
            <div className="absolute inset-0 -z-10 opacity-70">
              <VantaBackground effect="clouds" options={{ skyColor: 0x0b1220, cloudColor: 0x1f3a8a, cloudShadowColor: 0x0b1220, sunGlareColor: 0x334155, sunlightColor: 0x93c5fd }} />
            </div>
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
            <div className="absolute inset-0 -z-10 opacity-70">
              <VantaBackground effect="clouds" options={{ skyColor: 0x0b1220, cloudColor: 0x1f3a8a, cloudShadowColor: 0x0b1220, sunGlareColor: 0x334155, sunlightColor: 0x93c5fd }} />
            </div>
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
  const { t, locale } = useLanguage();
  const alignH2 = locale === 'fa' ? 'md:text-right' : 'md:text-left';
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
  const { t, locale } = useLanguage();
  const alignH2 = locale === 'fa' ? 'md:text-right' : 'md:text-left';
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('portfolio.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          imageSrc="/arya-foulad.jpg"
          imageAlt="Arya Foulad Qarn CMS"
          title={<span>Arya Foulad Qarn CMS <span className="text-sm font-normal text-green-300">({t('portfolio.inProgress')})</span></span>}
          description={t('portfolio.aryaDesc')}
          chips={['Node.js', 'Express.js', 'React', 'Next.js', 'Tailwind CSS', 'MySQL']}
          href="https://aryafoulad.pourdian.com"
          visitLabel={t('portfolio.visit')}
          vantaEffect="fog"
          vantaOptions={{ highlightColor: 0x22d3ee, midtoneColor: 0x0284c7, lowlightColor: 0x0ea5e9, baseColor: 0x0b1220 }}
        />
        <ProjectCard
          imageSrc="/nc.png"
          imageAlt="NC Clinic"
          title={t('portfolio.lcTitle')}
          description={t('portfolio.lcDesc')}
          chips={['Next.js', 'Tailwind CSS', 'Responsive', 'SEO']}
          href="https://lc.pourdian.com/"
          visitLabel={t('portfolio.visit')}
          vantaEffect="fog"
          vantaOptions={{ highlightColor: 0x93c5fd, midtoneColor: 0x3b82f6, lowlightColor: 0x1e3a8a, baseColor: 0x0b1220 }}
        />
        <ProjectCard
          imageSrc="/geokhuz.png"
          imageAlt="Geokhuz Website"
          title={t('portfolio.geokhuzTitle')}
          description={t('portfolio.geokhuzDesc')}
          chips={['Next.js', 'Tailwind CSS', 'SEO', 'Responsive']}
          href="https://geokhuz.pourdian.com/"
          visitLabel={t('portfolio.visit')}
          vantaEffect="fog"
          vantaOptions={{ highlightColor: 0x93c5fd, midtoneColor: 0x3b82f6, lowlightColor: 0x1e3a8a, baseColor: 0x0b1220 }}
        />
        <ProjectCard
          imageSrc="/mapdraft.png"
          imageAlt="MapDraft"
          title={t('portfolio.utmplusTitle')}
          description={t('portfolio.utmplusDesc')}
          chips={['Next.js', 'Tailwind CSS', 'Forms', 'UX']}
          href="https://utmplus.pourdian.com/"
          visitLabel={t('portfolio.visit')}
          vantaEffect="fog"
          vantaOptions={{ highlightColor: 0x22d3ee, midtoneColor: 0x06b6d4, lowlightColor: 0x0e7490, baseColor: 0x0b1220 }}
        />
      </div>
    </div>
  );
};

export const CertificationsContent = () => {
  const { t, locale } = useLanguage();
  const alignH2 = locale === 'fa' ? 'md:text-right' : 'md:text-left';
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
  const { t, locale } = useLanguage();
  const alignH2 = locale === 'fa' ? 'md:text-right' : 'md:text-left';
  return (
  <div className="space-y-6">
    <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('languages.title')}</h2>
    <div className="space-y-4">
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold text-white">{t('languages.fa')}</h3>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold text-white">{t('languages.en')}</h3>
      </div>
    </div>
  </div>
);
};

export const PricingTermsContent = () => {
  const { t, locale } = useLanguage();
  const alignH2 = locale === 'fa' ? 'md:text-right' : 'md:text-left';
  return (
  <div className="space-y-6">
    <h2 className={`text-3xl font-bold mb-4 text-center ${alignH2} text-white`}>{t('pricing.title')}</h2>
    <div className="space-y-4">
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold mb-2 text-white">{t('pricing.modelsTitle')}</h3>
        <ul className="list-disc list-inside text-white space-y-1 leading-relaxed">
          <li>{t('pricing.modelProject')}</li>
          <li>{t('pricing.modelHourly')}</li>
          <li>{t('pricing.modelMaintenance')}</li>
        </ul>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold mb-2 text-white">{t('pricing.ratesTitle')}</h3>
        <ul className="list-disc list-inside text-white space-y-1 leading-relaxed">
          <li>{t('pricing.rateFrontend')}</li>
          <li>{t('pricing.rateBackend')}</li>
          <li>{t('pricing.rateUX')}</li>
          <li>{t('pricing.rateMaintenance')}</li>
        </ul>
        <p className="text-sm text-white/80 mt-2">{t('pricing.note')}</p>
        <p className="text-xs text-white/70 mt-1">{t('pricing.noteExclusions')}</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold mb-2 text-white">{t('pricing.termsTitle')}</h3>
        <ul className="list-disc list-inside text-white/90 space-y-1 leading-relaxed">
          <li>{t('pricing.termPhases')}</li>
          <li>{t('pricing.termBugs')}</li>
          <li>{t('pricing.termCredit')}</li>
        </ul>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow border border-white/10">
        <h3 className="text-xl font-semibold mb-2 text-white">{t('pricing.timelineTitle')}</h3>
        <p className="text-white/90 leading-relaxed">
          {t('pricing.timelineText')}
        </p>
      </div>
    </div>
  </div>
);
}; 