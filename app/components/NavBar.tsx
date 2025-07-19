"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/", label: "Home", icon: "🎵", color: "bg-spotify-green", songName: "Lokesh's Vibe" },
    { href: "/about", label: "About", icon: "🎤", color: "bg-blue-500", songName: "My Story" },
    { href: "/education", label: "Education", icon: "📚", color: "bg-indigo-500", songName: "Academic Journey" },
    { href: "/experience", label: "Experience", icon: "🎸", color: "bg-orange-500", songName: "Career Path" },
    { href: "/projects", label: "Projects", icon: "🎹", color: "bg-purple-500", songName: "Key Projects & Leadership" },
    { href: "/contact", label: "Contact", icon: "🎧", color: "bg-pink-500", songName: "Let's Connect" }
  ];

  return (
    <nav className="bg-spotify-black/95 backdrop-blur-sm border-b border-spotify-gray-400/20 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-spotify-white font-bold text-xl hover:text-spotify-green transition-colors flex items-center space-x-3">
          <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center">
            <span className="text-spotify-black font-bold text-lg">L</span>
          </div>
          <span>Lokesh</span>
        </Link>
        
        {/* Playlist-style Navigation */}
        <div className="flex items-center justify-center space-x-6 relative flex-1 mx-8">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`group flex flex-col items-center justify-center space-y-3 p-6 rounded-xl transition-all duration-300 min-w-[140px] h-32 ${
                  isActive 
                    ? 'bg-spotify-light text-spotify-white shadow-xl' 
                    : 'text-spotify-gray-100 hover:bg-spotify-light hover:text-spotify-white hover:shadow-lg'
                }`}
              >
                <div className={`${item.color} rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                  isActive 
                    ? 'w-20 h-20 scale-110' 
                    : 'w-16 h-16 group-hover:scale-110'
                }`}>
                  <span className={`text-white transition-all duration-300 ${
                    isActive 
                      ? 'text-2xl' 
                      : 'text-xl'
                  }`}>
                    {item.icon}
                  </span>
                </div>
                <div className="text-center">
                  <div className={`text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? 'text-spotify-white' 
                      : 'text-spotify-gray-100 group-hover:text-spotify-white'
                  }`}>
                    {item.songName}
                  </div>
                  <div className={`text-xs transition-all duration-300 ${
                    isActive 
                      ? 'text-spotify-gray-200' 
                      : 'text-spotify-gray-400 group-hover:text-spotify-gray-200'
                  }`}>
                    {item.label}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>


      </div>
    </nav>
  );
} 