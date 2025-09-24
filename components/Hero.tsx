"use client";
import { useState } from 'react';
import { ChevronDown, ExternalLink, Users, Code, Award, Building } from 'lucide-react';

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const roles = [
    { name: 'Contributors', href: process.env.NEXT_PUBLIC_FORM_CONTRIBUTOR || '#', icon: Code },
    { name: 'Mentors', href: process.env.NEXT_PUBLIC_FORM_MENTOR || '#', icon: Users },
    { name: 'Project Admins', href: process.env.NEXT_PUBLIC_FORM_PROJECT || '#', icon: Award },
    { name: 'Sponsors', href: process.env.NEXT_PUBLIC_FORM_SPONSOR || '#', icon: Building },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Winter of
            <span className="block text-[var(--frost)]">Code Social</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
            Whether you’re a beginner or a pro, this winter is your chance to dive into open source, team up, and make an impact.
          </p>
        </div>

        {/* Event Dates */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-[var(--muted)]">
          <div className="stat-pill">
            <span className="text-[var(--frost)]">Registration:</span>
            Oct 1 - Dec 31, 2025
          </div>
          <div className="stat-pill">
            <span className="text-[var(--frost)]">Coding Period:</span>
            Nov 1, 2025 - Jan 31, 2025
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Register Dropdown */}
            <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn-primary inline-flex items-center gap-2"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Register Now
              <ChevronDown 
              size={18} 
              className={`transform transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-64 panel rounded-lg shadow-xl z-50">
              <div className="p-2">
                {/* Contributor Form Link */}
                <a
                href="https://forms.gle/UNzHDjYAMkYpoYPy6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[var(--bg)] transition-colors duration-200 group"
                onClick={() => setIsDropdownOpen(false)}
                >
                <Code size={18} className="text-[var(--frost)]" />
                <span className="text-[var(--text)] group-hover:text-[var(--frost)]">
                  Contributors
                </span>
                <ExternalLink 
                  size={14} 
                  className="ml-auto text-[var(--muted)] group-hover:text-[var(--frost)]" 
                />
                </a>
                {/* Mentor Form Link */}
                <a
                href="https://forms.gle/PWRP2BM4DqGbqh6w5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[var(--bg)] transition-colors duration-200 group"
                onClick={() => setIsDropdownOpen(false)}
                >
                <Users size={18} className="text-[var(--frost)]" />
                <span className="text-[var(--text)] group-hover:text-[var(--frost)]">
                  Mentors
                </span>
                <ExternalLink 
                  size={14} 
                  className="ml-auto text-[var(--muted)] group-hover:text-[var(--frost)]" 
                />
                </a>
                {/* Project Admin Form Link */}
                <a
                href="https://forms.gle/PT1db4BeP4kQDNrG8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[var(--bg)] transition-colors duration-200 group"
                onClick={() => setIsDropdownOpen(false)}
                >
                <Award size={18} className="text-[var(--frost)]" />
                <span className="text-[var(--text)] group-hover:text-[var(--frost)]">
                  Project Admins
                </span>
                <ExternalLink 
                  size={14} 
                  className="ml-auto text-[var(--muted)] group-hover:text-[var(--frost)]" 
                />
                </a>
              </div>
              </div>
            )}
            </div>

          {/* Leaderboard Button */}
          <a
            href="/leaderboard"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View Leaderboard
          </a>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">10k+</div>
            <div className="text-sm text-[var(--muted)]">Developers</div>
          </div>
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">1.5k+</div>
            <div className="text-sm text-[var(--muted)]">Resources</div>
          </div>
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">500+</div>
            <div className="text-sm text-[var(--muted)]">PRs</div>
          </div>
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">50+</div>
            <div className="text-sm text-[var(--muted)]">Events</div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </section>
  );
}