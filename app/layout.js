import React from 'react';

// In your local Next.js project folder, you can keep:
import './globals.css';
import Navbar from './components/Navbar';

const DefaultNavbar = () => (
  <nav className="sticky top-0 z-50 bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 py-4 px-6">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <a href="/" className="text-2xl font-bold text-white tracking-wider">
        A<span className="text-blue-500">.</span>
      </a>
      <div className="flex items-center space-x-6 text-sm font-medium text-slate-300">
        <a href="/" className="hover:text-white transition-colors">Home</a>
        <a href="/about" className="hover:text-white transition-colors">About Me</a>
        <a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a>
        <a href="/contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#0B0F17] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
        
        {/* Navigation */}
        <DefaultNavbar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800/80 bg-[#080B11] text-center text-xs text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Arif. All rights reserved.</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </footer>

      </body>
    </html>
  );
}