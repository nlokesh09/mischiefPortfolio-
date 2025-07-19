"use client";
import Link from "next/link";

export default function ProjectsPage() {
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
              <span className="text-spotify-gray-100">Projects & Leadership</span>
              <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
                <span className="text-spotify-black font-bold text-sm">🎯</span>
              </div>
            </div>
            
            {/* Next Page Navigation */}
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>📞</span>
              <span>Next: Contact</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-spotify-white mb-4">Key Projects & Leadership</h1>
          <p className="text-spotify-gray-100 text-xl mb-6">Leadership experiences and extracurricular activities that shaped my journey</p>
        </div>

        {/* Leadership Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-spotify-white mb-8 flex items-center">
            <span className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center mr-4">
              <span className="text-spotify-black font-bold">👥</span>
            </span>
            Leadership & Extracurricular Activities
          </h2>
          
          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
            <h3 className="text-2xl font-semibold text-spotify-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                <span className="text-spotify-black font-bold text-sm">🤝</span>
              </span>
              Junior Engineer Mentorship & Team Collaboration
            </h3>
            <p className="text-spotify-gray-200 text-sm mb-3">Jio Platforms Limited • Jul 2022 - Jun 2024 • Bangalore, India</p>
            
            <div className="mb-6">
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                Being a key member of a high-performing team means more than just writing code - it's about lifting others up while you climb. At Jio Platforms, I had the privilege of working alongside brilliant engineers while taking on the responsibility of mentoring junior developers who were just starting their journey in the tech world.
              </p>
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                The most rewarding part was watching junior engineers transform from nervous newcomers to confident contributors. I remember one particular junior developer who was struggling with the complexity of our AdTech platform. Instead of just giving him solutions, I taught him how to break down complex problems, debug systematically, and think like a senior engineer. When he successfully delivered his first major feature and presented it to the team, the pride in his eyes was priceless. That's when I realized that true leadership isn't about titles - it's about making others better.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-spotify-white mb-3 flex items-center">
                <span className="w-5 h-5 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                  <span className="text-spotify-black font-bold text-xs">✓</span>
                </span>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Mentored 10+ junior engineers across different technology stacks, helping them grow from junior developers to confident professionals</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Collaborated with product, design, and business teams to ensure technical solutions aligned with business objectives</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Led technical discussions with enterprise clients, translating complex technical concepts into business value propositions</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Established best practices for code quality and deployment, ensuring consistent delivery across multiple teams</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">10+ Engineers Mentored</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Team Collaboration</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Best Practices</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Client Relations</span>
            </div>
          </div>


          
          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
            <h3 className="text-2xl font-semibold text-spotify-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                <span className="text-spotify-black font-bold text-sm">🎓</span>
              </span>
              Senior Member - Placement Cell, IIIT Allahabad
            </h3>
            <p className="text-spotify-gray-200 text-sm mb-3">May 2021 - May 2022 • Prayagraj, Uttar Pradesh, India</p>
            
            <div className="mb-6">
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                Picture this: It's the middle of placement season at IIIT Allahabad, and I'm sitting in the placement office surrounded by nervous students, company representatives, and stacks of resumes. As a Senior Member of the Placement Cell, I wasn't just coordinating interviews - I was helping shape the futures of hundreds of students who, like me, came from small towns with big dreams.
              </p>
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                The most rewarding part? Watching students transform from nervous candidates to confident professionals. I remember one particular student who was struggling with technical interviews. We spent countless evenings practicing coding problems, mock interviews, and building his confidence. When he finally got placed at a top tech company, the joy in his eyes reminded me why I took on this role in the first place.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-spotify-white mb-3 flex items-center">
                <span className="w-5 h-5 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                  <span className="text-spotify-black font-bold text-xs">✓</span>
                </span>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Guided and assisted students with career development, leading to successful placements and significant professional growth</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Collaborated with the team to create valuable networking opportunities and connections for students</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Played a pivotal role in facilitating the placement of over 400 students, achieving a 100% success rate</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">400+ Students Placed</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">100% Success Rate</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Career Development</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Student Mentoring</span>
            </div>
          </div>

          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
            <h3 className="text-2xl font-semibold text-spotify-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                <span className="text-spotify-black font-bold text-sm">⚽</span>
              </span>
              Coordinator - SPIRIT Sports Society, IIIT Allahabad
            </h3>
            <p className="text-spotify-gray-200 text-sm mb-3">May 2020 - May 2021 • Prayagraj, Uttar Pradesh, India</p>
            
            <div className="mb-6">
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                Imagine coordinating a sports fest where 120 students are heading to different colleges across the country, each carrying the pride of IIIT Allahabad on their shoulders. As the Coordinator of SPIRIT Sports Society, I wasn't just managing schedules and logistics - I was building a community where sports became the language of unity and excellence.
              </p>
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                The most challenging yet rewarding moment was during our annual sports fest. We had teams competing in multiple sports simultaneously, and I was coordinating everything from cricket matches to basketball tournaments. When our cricket team won the inter-college championship, the entire campus erupted in celebration. That moment taught me that leadership isn't just about managing tasks - it's about inspiring people to achieve their best and celebrating their victories together.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-spotify-white mb-3 flex items-center">
                <span className="w-5 h-5 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                  <span className="text-spotify-black font-bold text-xs">✓</span>
                </span>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Led a team of 40 members and volunteers, managing and scheduling activities for the annual sports fest</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Skillfully coordinated sports society initiatives, fostering a vibrant campus sports culture</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Directed a contingent of 120 students to various colleges for sports fests, promoting healthy competition and team spirit</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">40+ Team Members</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">120 Students Coordinated</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Sports Fest Management</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Team Leadership</span>
            </div>
          </div>

          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
            <h3 className="text-2xl font-semibold text-spotify-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                <span className="text-spotify-black font-bold text-sm">💃</span>
              </span>
              Senior Member - Geneticx Dance Crew, IIIT Allahabad
            </h3>
            <p className="text-spotify-gray-200 text-sm mb-3">Aug 2019 - May 2021 • Prayagraj, Uttar Pradesh, India</p>
            
            <div className="mb-6">
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                Dance wasn't just about performing - it was about creating moments that brought our entire campus together. As a Senior Member of Geneticx Dance Crew, I discovered that leadership in the arts requires a unique blend of creativity, discipline, and emotional intelligence. We weren't just dancers; we were storytellers who used movement to express the vibrant culture of IIIT Allahabad.
              </p>
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                One of my most memorable experiences was organizing our annual cultural fest performance. We had dancers from different backgrounds, each with their own style and strengths. My challenge was to bring these diverse talents together into a cohesive performance that would represent our institution. When we finally performed in front of thousands of students, the energy was electric. That moment taught me that true leadership is about recognizing individual strengths and weaving them into something greater than the sum of its parts.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-spotify-white mb-3 flex items-center">
                <span className="w-5 h-5 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                  <span className="text-spotify-black font-bold text-xs">✓</span>
                </span>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Participated in various Dance Competitions and events showcasing talent and representing IIIT Allahabad</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Event Organization: Coordinated major dance events, enhancing the institution's cultural vibrancy</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Facilitated team bonding activities, improving cohesion and communication</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Actively contributed to IIIT Allahabad's vibrant cultural scene through performance and participation</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Dance Competitions</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Event Organization</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Cultural Leadership</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Team Building</span>
            </div>
          </div>

          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up">
            <h3 className="text-2xl font-semibold text-spotify-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-3">
                <span className="text-spotify-black font-bold text-sm">❤️</span>
              </span>
              PRAYAS (Community Engagement), IIIT Allahabad
            </h3>
            <p className="text-spotify-gray-200 text-sm mb-3">Community Member • Aug 2019 - Jul 2021 • Allahabad, India</p>
            
            <div className="mb-6">
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                Education has the power to transform lives, and through PRAYAS, I witnessed this transformation firsthand. Every weekend, I would walk into a small community center where 120 underprivileged children eagerly awaited their weekly learning sessions. These weren't just students - they were bright minds with dreams as big as mine, waiting for someone to believe in them.
              </p>
              <p className="text-spotify-gray-100 text-lg leading-relaxed mb-4">
                The most touching moment was when a 12-year-old girl, who had never been to school before, read her first complete sentence. The joy in her eyes and the pride in her voice reminded me why education is so powerful. We weren't just teaching them to read and write - we were giving them the tools to dream bigger, to believe that their future could be different from their present. Coordinating with 15+ volunteers, each with their own teaching style and expertise, taught me that community service is about more than just giving back - it's about building a better future together.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-spotify-white mb-3 flex items-center">
                <span className="w-5 h-5 bg-spotify-green rounded-full flex items-center justify-center mr-2">
                  <span className="text-spotify-black font-bold text-xs">✓</span>
                </span>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Led educational initiatives for over 120 underprivileged children, developing and implementing literacy programs</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Coordinated with 15+ volunteers to organize weekly teaching sessions and skill development workshops for underprivileged</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Designed and implemented personalized learning programs tailored to individual student needs and learning styles</span>
                </li>
                <li className="text-spotify-gray-100 flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Created a sustainable volunteer recruitment and training system to ensure program continuity and growth</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">120+ Children Helped</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">15+ Volunteers</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Literacy Programs</span>
              <span className="bg-spotify-green/20 text-spotify-green text-sm px-3 py-1 rounded-full">Community Service</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-spotify-dark rounded-2xl p-8 border border-spotify-gray-400/20">
            <h2 className="text-2xl font-bold text-spotify-white mb-4">Ready to Connect?</h2>
            <p className="text-spotify-gray-100 mb-6">Let's discuss how my leadership experiences can contribute to your team</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>📞</span>
                <span>Get in Touch</span>
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center space-x-2 bg-spotify-light hover:bg-spotify-gray-400 text-spotify-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>👤</span>
                <span>Learn More About Me</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
