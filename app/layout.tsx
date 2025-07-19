import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Lokesh's Portfolio",
  description: "Duke Graduate • 2+ Years Experience • Vibe Coding Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-spotify-black text-spotify-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
