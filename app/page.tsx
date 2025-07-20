"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface MediaItem {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  type: 'image' | 'video';
}

const quotes = [
  "A strong, positive self-image is the best possible preparation for success.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Every day is a new beginning. Take a deep breath and start again."
];



export default function Home() {
  const [quote, setQuote] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mediaItems: MediaItem[] = [
    // Favorites on top
    { src: "/fav1.jpg", alt: "Favorite Duke Memory 1", title: "Favorite Memory", subtitle: "Special Duke Moment", type: 'image' },
    { src: "/fav2.jpg", alt: "Favorite Duke Memory 2", title: "Another Favorite", subtitle: "Precious Duke Memory", type: 'image' },
    { src: "/fav3.jpg", alt: "Favorite Duke Memory 3", title: "Third Favorite", subtitle: "Amazing Duke Memory", type: 'image' },
    { src: "/fav4.jpg", alt: "Favorite Duke Memory 4", title: "Fourth Favorite", subtitle: "Incredible Duke Memory", type: 'image' },
    { src: "/fav5.jpg", alt: "Favorite Duke Memory 5", title: "Fifth Favorite", subtitle: "Unforgettable Duke Memory", type: 'image' },
    { src: "/fav_0.JPG", alt: "Favorite Duke Memory 6", title: "Sixth Favorite", subtitle: "Special Duke Moment", type: 'image' },
    { src: "/Fav.JPG", alt: "Favorite Duke Memory 7", title: "Seventh Favorite", subtitle: "Precious Duke Memory", type: 'image' },
    
    // Graduation photos
    { src: "/Graduation_0.JPG", alt: "Graduation Celebration", title: "Graduation Day", subtitle: "Fuqua Graduation", type: 'image' },
    { src: "/Graduation_1.jpg", alt: "Graduation Ceremony", title: "Graduation Ceremony", subtitle: "Master's Degree", type: 'image' },
    { src: "/Graduation_2.jpg", alt: "Graduation Memories", title: "Graduation Memories", subtitle: "Celebrating Success", type: 'image' },
    { src: "/Images/grad.JPG", alt: "Graduation Photo", title: "Graduation Photo", subtitle: "Graduation Celebration", type: 'image' },
    
    // Friends photos
    { src: "/Gang1.JPG", alt: "Friends Group 1", title: "Friends Group", subtitle: "Amazing Friends", type: 'image' },
    { src: "/Gang.jpg", alt: "Friends Group 2", title: "Friend Squad", subtitle: "Great Memories", type: 'image' },
    { src: "/miniGng.JPG", alt: "Mini Gang", title: "Mini Gang", subtitle: "Close Friends", type: 'image' },
    { src: "/Images/miniGng2.JPG", alt: "Mini Gang 2", title: "Mini Gang 2", subtitle: "Best Friends", type: 'image' },
    
    // Adventures photos
    { src: "/meSmoky.jpg", alt: "Me at Smoky Mountains", title: "Smoky Mountains", subtitle: "Adventure Time", type: 'image' },
    { src: "/Smoky.JPG", alt: "Smoky Mountains Trip", title: "Smoky Trip", subtitle: "Nature Adventure", type: 'image' },
    { src: "/meSnow.jpg", alt: "Me in Snow", title: "Snow Day", subtitle: "Winter Fun", type: 'image' },
    { src: "/meCollege.jpg", alt: "College Life", title: "College Life", subtitle: "Student Days", type: 'image' },
    { src: "/golf.jpg", alt: "Golf Game", title: "Golf Game", subtitle: "Sports at Duke", type: 'image' },
    { src: "/Images/basketball.jpg", alt: "Basketball Game", title: "Basketball Game", subtitle: "Duke Basketball", type: 'image' },
    { src: "/Images/baskedball.jpg", alt: "Basketball Fun", title: "Basketball Fun", subtitle: "Sports Fun", type: 'image' },
    { src: "/Images/NCAA.jpg", alt: "NCAA Event", title: "NCAA Event", subtitle: "College Sports", type: 'image' },
    { src: "/iceskt.JPG", alt: "Ice Skating", title: "Ice Skating", subtitle: "Winter Sports", type: 'image' },
    { src: "/Images/fun.jpg", alt: "Fun Time", title: "Fun Time", subtitle: "Great Memories", type: 'image' },
    { src: "/Images/fun1.jpg", alt: "Fun Activity 1", title: "Fun Activity 1", subtitle: "Amazing Times", type: 'image' },
    { src: "/Images/fun2.jpg", alt: "Fun Activity 2", title: "Fun Activity 2", subtitle: "Incredible Memories", type: 'image' },
    { src: "/Images/funn.jpg", alt: "Fun Activity 3", title: "Fun Activity 3", subtitle: "Unforgettable Fun", type: 'image' },
    { src: "/Images/GoodDays.JPG", alt: "Good Days", title: "Good Days", subtitle: "Best Times at Duke", type: 'image' },
    { src: "/holiii.JPG", alt: "Holiday Fun", title: "Holiday Fun", subtitle: "Holiday Memories", type: 'image' },
    { src: "/FCCP.jpg", alt: "FCCP Event", title: "FCCP Event", subtitle: "Professional Event", type: 'image' },
    { src: "/ACC.jpg", alt: "ACC Event", title: "ACC Event", subtitle: "Basketball ACC", type: 'image' },
    { src: "/udt.JPG", alt: "UDT Event", title: "UDT Event", subtitle: "Grad Photoshoot", type: 'image' },
    { src: "/mascot.jpg", alt: "Mascot", title: "Mascot", subtitle: "Duke Mascot", type: 'image' },
    { src: "/formals.jpg", alt: "Formals", title: "Formals", subtitle: "Formal Event", type: 'image' },
    { src: "/uncFb.jpg", alt: "UNC Football", title: "UNC Football", subtitle: "Rivalry Game", type: 'image' },
    
    // Chapel photos
    { src: "/chapelNight.jpg", alt: "Duke Chapel at Night", title: "Chapel at Night", subtitle: "Beautiful Duke Chapel", type: 'image' },
    { src: "/chape;.jpg", alt: "Duke Chapel", title: "Duke Chapel", subtitle: "Iconic Campus Landmark", type: 'image' },
    { src: "/Images/chapelClimb.jpg", alt: "Chapel Climb", title: "Chapel Climb", subtitle: "Adventure at Duke Chapel", type: 'image' },
    
    // Videos
    { src: "/IMG_9939 2.MOV", alt: "Duke Video 1", title: "Campus Tour", subtitle: "Duke University Tour", type: 'video' },
    { src: "/IMG_9477.MOV", alt: "Duke Video 2", title: "Student Life", subtitle: "Campus Activities", type: 'video' },
    { src: "/B000B182-752A-4387-AEF4-0D2BD398AF52.MP4", alt: "Duke Video 3", title: "Graduate Experience", subtitle: "Fuqua Journey", type: 'video' },
  ];

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <main className="w-screen flex flex-col bg-spotify-black overflow-y-auto relative min-h-screen">
      
      {/* Main content area */}
      <div className="relative z-10 flex flex-col items-center p-8 py-16">
        <div className="max-w-5xl mx-auto w-full">
          {/* Profile section */}
          <div className="bg-spotify-dark/80 backdrop-blur-sm rounded-2xl p-8 border border-spotify-gray-400/20 animate-slide-up mb-12">
            <div className="flex items-center space-x-8">
              <div className="w-48 h-48 bg-spotify-green rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src="/lokeshProfilePic.JPG" 
                  alt="Lokesh" 
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    // Fallback to "L" if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-spotify-green to-spotify-green-hover flex items-center justify-center hidden">
                  <span className="text-spotify-black text-7xl font-bold">L</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-spotify-green text-sm font-bold uppercase tracking-wider">Now Playing</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-spotify-green rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-spotify-green rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-spotify-green rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                
                <h1 className="text-6xl font-bold text-spotify-white mb-3">Lokesh's Vibe</h1>
                <p className="text-spotify-gray-100 text-lg mb-4">Excited about tech and product • Backend Developer • Enthusiastic about products which bring change to this world 🎵</p>
                
                <div className="flex items-center space-x-6 text-spotify-gray-200 text-sm mb-4">
                  <span className="flex items-center space-x-2">
                    <span className="text-spotify-green">⚡</span>
                    <span>2+ years experience in tech</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-2">
                    <span className="text-spotify-green">🚀</span>
                    <span>Impact Creator</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-2">
                    <span className="text-spotify-green">⚽</span>
                    <span>Sports Enthusiast</span>
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <a 
                    href="https://open.spotify.com/playlist/2AvPhfLhDLhusLrQagoHQX?si=WLja0i70S-u_3GjCMbakHw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <span>🎵</span>
                    <span>Playlist</span>
                  </a>

                  <a 
                    href="https://music.youtube.com/playlist?list=PLkDKrvB3BwsDRkU1KSqPV71ieycPRzkhh&si=n9eIsIxNseLZEiEJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <span>🎵</span>
                    <span>Playlist</span>
                  </a>
                  <span className="text-spotify-gray-400 text-xs">• Updated today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote section */}
          <div className="bg-spotify-dark/90 backdrop-blur-sm rounded-2xl p-8 border border-spotify-gray-400/30 animate-fade-in mb-8">
            <div className="text-center">
              <div className="text-2xl text-spotify-gray-100 italic max-w-3xl mx-auto mb-8">
                "{quote}"
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-3 bg-spotify-green hover:bg-spotify-green-hover text-spotify-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-slide-up shadow-lg"
              >
                <span className="text-xl">🎵</span>
                <span className="text-lg">Connect with me</span>
              </Link>
            </div>
          </div>

          {/* Gallery section - MEDIA GALLERY COMMENTED OUT */}
        </div>
      </div>

      {/* Modal for full-size viewing - MEDIA MODAL COMMENTED OUT */}
    </main>
  );
}
