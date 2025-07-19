"use client";
import Link from "next/link";

export default function ContactPage() {
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
              <span className="text-spotify-gray-100">Contact Details</span>
              <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
                <span className="text-spotify-black font-bold text-sm">📞</span>
              </div>
            </div>
            
            {/* Next Page Navigation */}
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>🏠</span>
              <span>Next: Home</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-spotify-white mb-4">Let's Connect</h1>
          <p className="text-spotify-gray-100 text-xl mb-6">Ready to collaborate, discuss opportunities, or just say hello?</p>
          <div className="w-24 h-1 bg-spotify-green mx-auto rounded-full"></div>
        </div>

        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-spotify-dark rounded-2xl p-6 border border-spotify-gray-400/20 hover:border-spotify-green/50 transition-all duration-300 animate-slide-up group">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-spotify-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-spotify-black text-xl font-bold">💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-spotify-white font-semibold mb-1">LinkedIn</h3>
                  <p className="text-spotify-gray-200 text-sm mb-2">Professional Network</p>
                  <a 
                    href="https://www.linkedin.com/in/lokeshnaik09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-spotify-green hover:text-spotify-green-hover font-medium inline-flex items-center space-x-1 group-hover:underline"
                  >
                    <span>lokeshnaik09</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-spotify-dark rounded-2xl p-6 border border-spotify-gray-400/20 hover:border-spotify-green/50 transition-all duration-300 animate-slide-up group">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-spotify-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-spotify-black text-xl">✉️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-spotify-white font-semibold mb-1">Email</h3>
                  <p className="text-spotify-gray-200 text-sm mb-2">Direct Communication</p>
                  <a 
                    href="mailto:lokesh.nenavath@duke.edu" 
                    className="text-spotify-green hover:text-spotify-green-hover font-medium inline-flex items-center space-x-1 group-hover:underline"
                  >
                    <span>lokesh.nenavath@duke.edu</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-spotify-dark rounded-2xl p-6 border border-spotify-gray-400/20 hover:border-spotify-green/50 transition-all duration-300 animate-slide-up group">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-spotify-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-spotify-black text-xl">📱</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-spotify-white font-semibold mb-1">Phone</h3>
                  <p className="text-spotify-gray-200 text-sm mb-2">Direct Call</p>
                  <a 
                    href="tel:+19193585516" 
                    className="text-spotify-green hover:text-spotify-green-hover font-medium inline-flex items-center space-x-1 group-hover:underline"
                  >
                    <span>+1 (919) 358-5516</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">📞</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-spotify-dark rounded-2xl p-6 border border-spotify-gray-400/20 hover:border-spotify-green/50 transition-all duration-300 animate-slide-up group">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-spotify-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-spotify-black text-xl">📍</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-spotify-white font-semibold mb-1">Location</h3>
                  <p className="text-spotify-gray-200 text-sm mb-2">Current Base</p>
                  <a 
                    href="https://maps.google.com/?q=Durham,NC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-spotify-green hover:text-spotify-green-hover font-medium inline-flex items-center space-x-1 group-hover:underline"
                  >
                    <span>Durham, NC</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Info */}
          <div className="space-y-6">
            <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
              <h2 className="text-2xl font-bold text-spotify-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                  <span className="text-spotify-black font-bold text-sm">💬</span>
                </span>
                Quick Message
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-spotify-gray-200 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-spotify-light border border-spotify-gray-400/30 rounded-lg text-spotify-white placeholder-spotify-gray-400 focus:outline-none focus:border-spotify-green transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-spotify-gray-200 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-spotify-light border border-spotify-gray-400/30 rounded-lg text-spotify-white placeholder-spotify-gray-400 focus:outline-none focus:border-spotify-green transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-spotify-gray-200 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-spotify-light border border-spotify-gray-400/30 rounded-lg text-spotify-white placeholder-spotify-gray-400 focus:outline-none focus:border-spotify-green transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>

            <div className="bg-spotify-dark rounded-2xl p-6 border border-spotify-gray-400/20 animate-slide-up">
              <h3 className="text-lg font-semibold text-spotify-white mb-4">What I'm Looking For</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-spotify-green rounded-full"></span>
                  <span className="text-spotify-gray-100">Full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-spotify-green rounded-full"></span>
                  <span className="text-spotify-gray-100">Freelance projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-spotify-green rounded-full"></span>
                  <span className="text-spotify-gray-100">Technical collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-spotify-green rounded-full"></span>
                  <span className="text-spotify-gray-100">Networking & mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20">
            <h2 className="text-2xl font-bold text-spotify-white mb-4">Ready to Start Something Amazing?</h2>
            <p className="text-spotify-gray-100 mb-6">Whether it's a project, opportunity, or just a conversation, I'm always excited to connect with fellow tech enthusiasts and innovators.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects"
                className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>🎯</span>
                <span>View My Projects</span>
              </Link>
              <a 
                href="https://www.linkedin.com/in/lokeshnaik09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-spotify-light hover:bg-spotify-gray-400 text-spotify-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>🔗</span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
