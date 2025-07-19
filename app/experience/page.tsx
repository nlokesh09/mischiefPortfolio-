"use client";
import Link from "next/link";

export default function ExperiencePage() {
  const experienceData = [
    {
      company: "Oracle",
      url: "https://www.oracle.com",
      role: "Consultant",
      duration: "Dec 2024 - Feb 2025",
      location: "Durham, NC",
      description: "Worked as a consultant on a college project, helping telecom giants optimize their operations through data-driven insights and strategic recommendations.",
      achievements: [
        "Developed a comprehensive sales-support maturity model framework with five key drivers for telecom clients, designed to boost customer lifetime value and retention rates",
        "Conducted quantitative business analysis on telecom client data to uncover growth opportunities and guide data-driven sales strategies",
        "Validated client pain points through extensive market research and shaped strategic solutions that resonate with telecom buyers",
        "Recommended targeted enhancements to Oracle's SaaS solutions, improving customer engagement tracking accuracy by 25%",
        "Partnered with Oracle's sales and product teams to define key performance indicators (KPIs) that facilitate consultative selling and ensure IT solutions align closely with client needs"
      ],
      technologies: ["Business Analysis", "Market Research", "SaaS Solutions", "KPI Development", "Strategic Consulting"],
      impact: "Helped optimize operations for multiple telecom clients through data-driven insights and strategic recommendations"
    },
    {
      company: "Jio Platforms Limited",
      url: "https://www.jio.com",
      role: "Software Engineer",
      duration: "Jul 2022 - Jun 2024",
      location: "Bangalore, India",
      dashboardUrl: "http://34.110.212.225/",
      description: "Picture this: I'm sitting at my desk in Jio's Bangalore office, staring at my dashboard that's showing real-time metrics of millions of viewers streaming IPL matches. This wasn't just another coding job - I was literally building the infrastructure that would power India's biggest cricket event and handle the dreams of millions of cricket fans simultaneously.",
      achievements: [
        "Developed a revolutionary scalable AdTech SSAI platform for IPL 2023, supporting over 32M concurrent viewers and delivering over 30B ad impressions with a 99% success rate while incorporating pre-roll, mid-roll, and post-roll ad placements logic",
        "Adopted an MVP-driven approach for ad delivery, enabling seamless live streaming and rapid iteration using real-time feedback from millions of users",
        "Built and optimized multi-language 4K adaptive bitrate (ABR) streaming workflows for 20+ device types, contributing to 12.1 B+ watch minutes in the first week and boosting client engagement by 25% through seamless viewing experiences during live cricket events",
        "Spearheaded the SaaS transformation of Jio's AdTech platform in the second year, enabling product scalability and reducing client onboarding time by 40% through modular REST APIs and real-time session tracking",
        "Collaborated closely with product and sales teams to understand client needs, shape feature requirements, and deliver tailored monetization and streaming solutions, leading to the onboarding of multiple Tier-1 telecom and media clients across India",
        "Designed a cohort-based manifest delivery system, efficiently handling 8-10M concurrent requests during IPL and WPL matches, enhancing CDN utilization by 25% while maintaining seamless streaming quality during peak viewing periods",
        "Mentored 10+ junior engineers, ensuring 100% on-time delivery of 15+ sprint features and earned Best Team of the Year recognition from Jio Cinema's CTO and VP for outstanding SSAI execution, leadership, and mentorship"
      ],
      technologies: ["Node.js", "HLS/DASH", "Redis", "Apache Kafka", "Spring Boot", "REST APIs", "CDN Optimization", "Real-time Analytics"],
      impact: "Powering India's biggest streaming events with technology that reaches millions of users simultaneously"
    }
  ];

  return (
    <main className="min-h-screen bg-spotify-black">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-spotify-dark/95 backdrop-blur-sm border-b border-spotify-gray-400/20">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/about" className="text-spotify-white font-bold text-xl hover:text-spotify-green transition-colors duration-300">
              ← Back to About
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-spotify-gray-100">Experience Details</span>
              <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
                <span className="text-spotify-black font-bold text-sm">💼</span>
              </div>
            </div>
            
            {/* Next Page Navigation */}
            <Link 
              href="/projects"
              className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>🎯</span>
              <span>Next: Projects</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-spotify-white mb-4">Career Path</h1>
          <p className="text-spotify-gray-100 text-xl mb-6">From Jio's IPL platform to Oracle consulting - building tech that reaches millions</p>
          <div className="w-24 h-1 bg-spotify-green mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
              {/* Company Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-spotify-green rounded-full flex items-center justify-center">
                    <span className="text-spotify-black text-2xl">💼</span>
                  </div>
                  <div>
                    <a 
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h2 className="text-2xl font-bold text-spotify-white mb-2 group-hover:text-spotify-green transition-colors duration-300 flex items-center">
                        {exp.company}
                        <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">↗</span>
                      </h2>
                    </a>
                    <p className="text-spotify-green text-lg font-semibold">{exp.role}</p>
                    <p className="text-spotify-gray-200">{exp.duration} • {exp.location}</p>
                    {exp.dashboardUrl && (
                      <a
                        href={exp.dashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-spotify-green hover:text-spotify-green-hover text-sm mt-2 transition-colors duration-300"
                      >
                        <span>🔗</span>
                        <span>Work Dashboard - Instreamo SSAI</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-spotify-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                    <span className="text-spotify-black text-xs">🏆</span>
                  </span>
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-spotify-green rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-spotify-gray-100 text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies and Impact */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-spotify-white mb-4 flex items-center">
                    <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                      <span className="text-spotify-black text-xs">⚡</span>
                    </span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-spotify-light px-3 py-1 rounded-full text-spotify-gray-100 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-lg font-semibold text-spotify-white mb-4 flex items-center">
                    <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                      <span className="text-spotify-black text-xs">🎯</span>
                    </span>
                    Impact
                  </h3>
                  <p className="text-spotify-gray-100 text-sm leading-relaxed">
                    {exp.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20">
            <h2 className="text-2xl font-bold text-spotify-white mb-4">Want to See My Projects?</h2>
            <p className="text-spotify-gray-100 mb-6">Explore the technical projects and leadership experiences that showcase my expertise and achievements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects"
                className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>🎯</span>
                <span>View Projects</span>
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center space-x-2 bg-spotify-light hover:bg-spotify-gray-400 text-spotify-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>👤</span>
                <span>Back to About</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
