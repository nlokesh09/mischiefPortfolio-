"use client";
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('bio');

  const sections = [
    { id: 'bio', label: 'My Story', icon: '👤', action: 'scroll' },
    { id: 'education', label: 'Academic Journey', icon: '🎓', action: 'scroll' },
    { id: 'experience', label: 'Career Path', icon: '💼', action: 'scroll' },
    { id: 'skills', label: 'Relevant Skills', icon: '⚡', action: 'scroll' }
  ];

  const handleSectionClick = (section: any) => {
    if (section.action === 'scroll') {
      setActiveSection(section.id);
      const element = document.getElementById(section.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section.action === 'navigate') {
      window.location.href = section.href;
    }
  };

  return (
    <main className="min-h-screen bg-spotify-black">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-spotify-dark/95 backdrop-blur-sm border-b border-spotify-gray-400/20">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-spotify-white font-bold text-xl hover:text-spotify-green transition-colors duration-300">
              ← Back to Home
            </Link>
            
            {/* Section Navigation */}
            <div className="flex space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section)}
                  className={`flex items-center space-x-4 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg ${
                    activeSection === section.id
                      ? 'bg-spotify-green text-spotify-black shadow-spotify-green/50'
                      : 'text-spotify-gray-100 hover:bg-spotify-light hover:text-spotify-white hover:shadow-xl'
                  }`}
                >
                  <span className="text-3xl">{section.icon}</span>
                  <span className="text-sm font-medium">{section.label}</span>
                </button>
              ))}
            </div>
            
            {/* Next Page Navigation */}
            <Link 
              href="/education"
              className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>🎓</span>
              <span>Next: Education</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-spotify-white mb-4">About Me</h1>
          <p className="text-spotify-gray-100 text-xl">Passionate about technology, business, and creating impactful solutions</p>
        </div>

        {/* Bio Section */}
        <div id="bio" className="bg-spotify-dark rounded-2xl p-8 mb-8 border border-spotify-gray-400/20 animate-slide-up">
          <h2 className="text-2xl font-bold text-spotify-white mb-4 flex items-center">
            <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
              <span className="text-spotify-black font-bold text-sm">👤</span>
            </span>
            My Story
          </h2>
          <p className="text-spotify-gray-100 text-lg leading-relaxed">
            Hey there! I'm Lokesh, and this is my story - from a small town dreamer to building tech that reaches millions. Picture this: I'm the guy who helped create the AdTech platform that made JioCinema's IPL 2023 absolutely epic - we're talking 32 million people watching simultaneously while seamlessly serving ads! 🚀
          </p>
          <p className="text-spotify-gray-100 text-lg leading-relaxed mt-4">
            <strong>My journey?</strong> It's been quite the adventure! It all started in a small town where my brother and family became my biggest inspiration. They taught me that with hard work and determination, anything is possible. Fast forward to IIIT Allahabad, where I discovered my love for algorithms (yes, even at 3 AM!). Then came Jio Platforms, where I got to build scalable AdTech solutions that actually touched millions of lives. Talk about a dream come true! 💻
          </p>
          <p className="text-spotify-gray-100 text-lg leading-relaxed mt-4">
            But the story doesn't end there! I took the biggest leap of all - traveling to the USA with nothing but dreams and determination. Picture this: a small-town guy landing in a new country, carrying not just his own dreams but the hopes of his entire family. It was scary, exciting, and absolutely worth it! I headed to Duke's Fuqua School of Business to level up my game, where I worked as a consultant on a project with Oracle, helping telecom giants optimize their operations. Think of me as that rare breed who can debug code AND explain business strategy without putting stakeholders to sleep! 🎯
          </p>
          <p className="text-spotify-gray-100 text-lg leading-relaxed mt-4">
            <strong>So what's next?</strong> Well, I'm always on the lookout for the next big challenge that combines my passion for technology with my love for solving real-world problems. Whether it's mentoring junior developers, diving into product strategy, or exploring new tech frontiers, I believe the best solutions come from mixing technical wizardry with business savvy. And who knows? Maybe the next chapter involves starting something of my own - after all, I've been carrying these dreams across continents! Ready to write the next chapter together? Let's connect! ✨
          </p>
        </div>

        {/* Education & Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div id="education" className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
            <h2 className="text-2xl font-bold text-spotify-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                <span className="text-spotify-black font-bold text-sm">🎓</span>
              </span>
              Academic Journey
            </h2>
            <div className="space-y-6">
              <div>
                <a 
                  href="https://www.fuqua.duke.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-lg font-semibold text-spotify-white mb-2 group-hover:text-spotify-green transition-colors duration-300 flex items-center">
                    Duke University - Fuqua School of Business
                    <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">↗</span>
                  </h3>
                </a>
                <p className="text-spotify-green mb-1">Master of Management Studies</p>
                <p className="text-spotify-gray-200 text-sm">May 2025 • Durham, NC</p>
                <p className="text-spotify-gray-100 text-sm mt-2">
                  Relevant courses: Financial Accounting, Corporate Finance, Business Economics, Quantitative Analysis, Marketing Analysis, Strategy, Market Research, Operations & Supply Chain Management
                </p>
              </div>
              <div>
                <a 
                  href="https://www.iiita.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-lg font-semibold text-spotify-white mb-2 group-hover:text-spotify-green transition-colors duration-300 flex items-center">
                    IIIT Allahabad
                    <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">↗</span>
                  </h3>
                </a>
                <p className="text-spotify-green mb-1">Bachelor of Technology in Information Technology</p>
                <p className="text-spotify-gray-200 text-sm">May 2022 • Allahabad, India</p>
                <p className="text-spotify-gray-100 text-sm mt-2">
                  Relevant courses: Data Structures & Algorithms, Database Management Systems, Machine Learning & AI, Data Analytics and Visualization
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div id="experience" className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
            <h2 className="text-2xl font-bold text-spotify-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                <span className="text-spotify-black font-bold text-sm">💼</span>
            </span>
              Career Path
            </h2>
            <div className="space-y-6">
              <div>
                <a 
                  href="https://www.oracle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-lg font-semibold text-spotify-white mb-2 group-hover:text-spotify-green transition-colors duration-300 flex items-center">
                    Oracle
                    <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">↗</span>
                  </h3>
                </a>
                <p className="text-spotify-green mb-1">Consultant</p>
                <p className="text-spotify-gray-200 text-sm">Dec 2024 - Feb 2025 • Durham, NC</p>
                <ul className="text-spotify-gray-100 text-sm mt-2 space-y-1">
                  <li>• Developed sales-support maturity model for telecom clients</li>
                  <li>• Conducted quantitative business analysis and market research</li>
                  <li>• Recommended SaaS solution enhancements</li>
                </ul>
              </div>
              <div>
                <a 
                  href="https://www.jio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-lg font-semibold text-spotify-white mb-2 group-hover:text-spotify-green transition-colors duration-300 flex items-center">
                    Jio Platforms Limited
                    <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">↗</span>
                  </h3>
                </a>
                <p className="text-spotify-green mb-1">Software Engineer</p>
                <p className="text-spotify-gray-200 text-sm">Jul 2022 - Jun 2024 • Bangalore, India</p>
                <ul className="text-spotify-gray-100 text-sm mt-2 space-y-1">
                  <li>• Developed scalable AdTech SSAI platform for IPL 2023</li>
                  <li>• Supported 32M+ concurrent viewers and 30B+ ad impressions</li>
                  <li>• Mentored 10+ junior engineers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
          <h2 className="text-2xl font-bold text-spotify-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
              <span className="text-spotify-black font-bold text-sm">⚡</span>
            </span>
            Relevant Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-spotify-white mb-3">Programming Languages</h3>
              <div className="space-y-2">
                {[
                  { name: 'Node.js', url: 'https://nodejs.org' },
                  { name: 'C++', url: 'https://isocpp.org' },
                  { name: 'Java', url: 'https://www.oracle.com/java/' },
                  { name: 'Python', url: 'https://www.python.org' },
                  { name: 'C', url: 'https://www.iso.org/standard/74528.html' },
                  { name: 'MySQL', url: 'https://www.mysql.com' },
                  { name: 'MongoDB', url: 'https://www.mongodb.com' },
                  { name: 'Elastic Search', url: 'https://www.elastic.co' },
                  { name: 'Keys-DB', url: '#' }
                ].map((skill) => (
                  <a 
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-spotify-light hover:bg-spotify-gray-400 px-3 py-2 rounded-lg text-spotify-gray-100 text-sm transition-all duration-300 group"
                  >
                    <span>{skill.name}</span>
                    <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-spotify-white mb-3">Web Technologies</h3>
              <div className="space-y-2">
                {[
                  { name: 'HLS', url: 'https://developer.apple.com/documentation/http_live_streaming' },
                  { name: 'DASH', url: 'https://dashif.org' },
                  { name: 'VOD', url: 'https://en.wikipedia.org/wiki/Video_on_demand' },
                  { name: 'Git', url: 'https://git-scm.com' },
                  { name: 'Redis', url: 'https://redis.io' },
                  { name: 'Apache Kafka', url: 'https://kafka.apache.org' },
                  { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
                  { name: 'Maven', url: 'https://maven.apache.org' },
                  { name: 'RESTful APIs', url: 'https://restfulapi.net' },
                  { name: 'Postman', url: 'https://www.postman.com' }
                ].map((skill) => (
                  <a 
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-spotify-light hover:bg-spotify-gray-400 px-3 py-2 rounded-lg text-spotify-gray-100 text-sm transition-all duration-300 group"
                  >
                    <span>{skill.name}</span>
                    <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-spotify-white mb-3">Tools & Platforms</h3>
              <div className="space-y-2">
                {[
                  { name: 'Azure DevOps', url: 'https://azure.microsoft.com/services/devops/' },
                  { name: 'Scrum', url: 'https://www.scrum.org' },
                  { name: 'Kibana', url: 'https://www.elastic.co/kibana' },
                  { name: 'Grafana', url: 'https://grafana.com' },
                  { name: 'Microsoft Suite', url: 'https://www.microsoft.com/microsoft-365' },
                  { name: 'GCP', url: 'https://cloud.google.com' },
                  { name: 'JAWS', url: 'https://www.freedomscientific.com/products/software/jaws/' }
                ].map((skill) => (
                  <a 
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-spotify-light hover:bg-spotify-gray-400 px-3 py-2 rounded-lg text-spotify-gray-100 text-sm transition-all duration-300 group"
                  >
                    <span>{skill.name}</span>
                    <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-spotify-white mb-3">Skills</h3>
              <div className="space-y-2">
                {[
                  'Cross-functional Collaboration',
                  'Product Sense',
                  'Strategic Thinking',
                  'Data-Driven Decision Making',
                  'Leadership & Initiative',
                  'Adaptability'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="inline-flex items-center bg-spotify-light px-3 py-2 rounded-lg text-spotify-gray-100 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}
