"use client";
import Link from "next/link";

export default function EducationPage() {
  const educationData = [
    {
      institution: "Duke University - Fuqua School of Business",
      url: "https://www.fuqua.duke.edu",
      degree: "Master of Management Studies",
      duration: "May 2025",
      location: "Durham, NC",
      gpa: "3.5/4.0",
      description: "Specialized in technology management and business analytics, focusing on bridging the gap between technical expertise and business strategy.",
      courses: [
        "Financial Accounting & Analysis",
        "Corporate Finance & Valuation",
        "Business Economics & Strategy",
        "Quantitative Business Analysis",
        "Marketing Analysis & Strategy",
        "Market Research & Consumer Insights",
        "Operations & Supply Chain Management",
        "Data Analytics for Business",
        "Technology Strategy & Innovation",
        "Leadership & Team Management"
      ],
      achievements: [
        "Selected for Technology Management concentration",
        "Active member of Duke Technology Club",
        "Participated in case competitions",
        "Collaborated on cross-functional projects"
      ],
      skills: ["Business Strategy", "Financial Analysis", "Market Research", "Data Analytics", "Leadership"]
    },
    {
      institution: "IIIT Allahabad",
      url: "https://www.iiita.ac.in",
      degree: "Bachelor of Technology in Information Technology",
      duration: "May 2022",
      location: "Allahabad, India",
      gpa: "8.2/10.0",
      description: "Comprehensive technical education with focus on software engineering, algorithms, and emerging technologies.",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Machine Learning & Artificial Intelligence",
        "Data Analytics and Visualization",
        "Computer Networks & Security",
        "Software Engineering & Design Patterns",
        "Operating Systems & System Programming",
        "Web Technologies & Development",
        "Cloud Computing & Distributed Systems",
        "Information Retrieval & Search Engines"
      ],
      achievements: [
        "Graduated with distinction",
        "Led technical projects and hackathons",
        "Mentored junior students in programming",
        "Active member of coding clubs and societies"
      ],
      skills: ["Software Engineering", "Algorithm Design", "Database Design", "Machine Learning", "Web Development"]
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
              <span className="text-spotify-gray-100">Education Details</span>
              <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
                <span className="text-spotify-black font-bold text-sm">🎓</span>
              </div>
            </div>
            
            {/* Next Page Navigation */}
            <Link 
              href="/experience"
              className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>💼</span>
              <span>Next: Experience</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-spotify-white mb-4">Academic Journey</h1>
          <p className="text-spotify-gray-100 text-xl mb-6">From small town dreams to Duke University - my path of continuous learning</p>
          <div className="w-24 h-1 bg-spotify-green mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
              {/* Institution Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-spotify-green rounded-full flex items-center justify-center">
                    <span className="text-spotify-black text-2xl">🎓</span>
                  </div>
                  <div>
                    <a 
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h2 className="text-2xl font-bold text-spotify-white mb-2 group-hover:text-spotify-green transition-colors duration-300 flex items-center">
                        {edu.institution}
                        <span className="text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">↗</span>
                      </h2>
                    </a>
                    <p className="text-spotify-green text-lg font-semibold">{edu.degree}</p>
                    <p className="text-spotify-gray-200">{edu.duration} • {edu.location}</p>
                    <p className="text-spotify-gray-100 text-sm">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Courses and Skills Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                {/* Courses */}
                <div>
                  <h3 className="text-lg font-semibold text-spotify-white mb-4 flex items-center">
                    <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                      <span className="text-spotify-black text-xs">📚</span>
                    </span>
                    Key Courses
                  </h3>
                  <div className="space-y-2">
                    {edu.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-spotify-green rounded-full"></span>
                        <span className="text-spotify-gray-100 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-spotify-white mb-4 flex items-center">
                    <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                      <span className="text-spotify-black text-xs">⚡</span>
                    </span>
                    Skills Developed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-spotify-light px-3 py-1 rounded-full text-spotify-gray-100 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-spotify-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                    <span className="text-spotify-black text-xs">🏆</span>
                  </span>
                  Key Achievements
                </h3>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-spotify-green rounded-full"></span>
                      <span className="text-spotify-gray-100 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20">
            <h2 className="text-2xl font-bold text-spotify-white mb-4">Ready to See My Experience?</h2>
            <p className="text-spotify-gray-100 mb-6">Discover how my academic foundation translates into real-world impact and professional achievements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/experience"
                className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>💼</span>
                <span>View Experience</span>
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