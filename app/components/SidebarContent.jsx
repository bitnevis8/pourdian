'use client';

import Image from 'next/image';
import ChatBox from './ChatBox';

export const AboutContent = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">About Me</h2>
    <p className="text-gray-700 leading-relaxed">
      A passionate Full Stack Developer with extensive experience in JavaScript, React, Next.js, and Express.js. Specialized in building modern web applications, RESTful APIs, and AI-powered solutions. Also experienced in web development, network administration, and system management with PHP and various CMS platforms.
    </p>
    
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-2">Programming</h4>
          <div className="flex flex-wrap gap-2">
            {[
              'Node.js', 'Express.js', 'React', 'Next.js', 'Laravel', 
              'Livewire', 'Alpine.js', 'Vue.js', 'PHP'
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-2">Web Design & Front-end</h4>
          <div className="flex flex-wrap gap-2">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'TailwindCSS',
              'Bootstrap', 'Materialize CSS', 'Semantic UI', 'Foundation'
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-2">Network & Systems</h4>
          <div className="flex flex-wrap gap-2">
            {[
              'Network+', 'Mikrotik MTCNA', 'Linux Essential', 'MySQL', 'MongoDB'
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-2">Design & CMS</h4>
          <div className="flex flex-wrap gap-2">
            {[
              'WordPress', 'MyBB', '3DS Max', 'Maya', 'Photoshop'
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8">
      <ChatBox />
    </div>
  </div>
);

export const ResumeContent = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Resume</h2>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">IT Manager & Developer</h3>
        <p className="text-gray-600">Arya Foulad Qarn • Jan 2025 - Present</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Managing IT infrastructure and development team</li>
          <li>Developing and maintaining web applications</li>
          <li>Implementing security measures and best practices</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">IT Manager & Developer</h3>
        <p className="text-gray-600">Mohammadian Holding • Nov 2024 - Jan 2025</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Managing IT infrastructure and development team</li>
          <li>Developing and maintaining web applications</li>
          <li>Implementing security measures and best practices</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Developer</h3>
        <p className="text-gray-600">Vakili Shelving Company • Feb 2023 - Apr 2023</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Full-stack development and system implementation</li>
          <li>Designing and developing automation systems</li>
          <li>Implementing efficient warehouse management solutions</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Developer & Technical Support</h3>
        <p className="text-gray-600">IT Arvand Online Store • Mar 2022 - Dec 2022</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Developing and maintaining e-commerce platform</li>
          <li>Providing technical support and troubleshooting</li>
          <li>Implementing new features and improvements</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Developer & Automation Designer</h3>
        <p className="text-gray-600">Pars Decoration Company • Jul 2018 - Jan 2019</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Designing and implementing automation systems</li>
          <li>Developing custom software solutions</li>
          <li>Managing system integration projects</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Android Development & Website Management</h3>
        <p className="text-gray-600">Self Employed • Apr 2016 - Apr 2019</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Designing and managing Android programming education website</li>
          <li>Developing educational content and resources</li>
          <li>Managing online learning platform</li>
        </ul>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Education</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold">Master's in Computer Software Engineering</h4>
          <p className="text-gray-600">Islamic Azad University, Dezful • 2019 - 2021</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold">Network+ Certification</h4>
          <p className="text-gray-600">Tehran Technical Complex • 2014 - 2015</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold">Mikrotik MTCNA Certification</h4>
          <p className="text-gray-600">Tehran Technical Complex • 2015</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold">Linux Essential</h4>
          <p className="text-gray-600">Tosinso • 2018</p>
        </div>
      </div>
    </div>
  </div>
);

export const PortfolioContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Portfolio</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src="/arya-foulad.jpg"
            alt="Arya Foulad Qarn CMS"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Arya Foulad Qarn CMS <span className="text-sm font-normal text-green-600">(In Progress)</span></h3>
          <p className="text-gray-600 mb-4">
            A comprehensive CMS system including mission assignment, cost calculation, user management, inventory management, and equipment management.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Node.js', 'Express.js', 'React', 'Next.js', 'Tailwind CSS', 'MySQL'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://aryafoulad.pourdian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Visit Project
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export const CertificationsContent = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Certifications</h2>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Network+ Certification</h3>
        <p className="text-gray-600">CompTIA • 2023</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Mikrotik MTCNA Certification</h3>
        <p className="text-gray-600">Mikrotik • 2023</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Linux Essential</h3>
        <p className="text-gray-600">Linux Professional Institute • 2023</p>
      </div>
    </div>
  </div>
);

export const LanguagesContent = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Languages</h2>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Persian</h3>
        <p className="text-gray-600">Native</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold">English</h3>
        <p className="text-gray-600">Professional</p>
      </div>
    </div>
  </div>
); 