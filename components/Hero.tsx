"use client";
import { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Users, Code, Award } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import AnimatedCounter from './AnimatedCounter';
import { FORM_CONTRIBUTOR, FORM_MENTOR, FORM_PROJECT } from '@/lib/links';

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const roles = [
    { name: 'Contributors', href: FORM_CONTRIBUTOR, icon: Code },
    { name: 'Mentors', href: FORM_MENTOR, icon: Users },
    { name: 'Project Admins', href: FORM_PROJECT, icon: Award },
  ];

  useEffect(() => {
    if (!isDropdownOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDropdownOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isDropdownOpen]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-2">
          <Image
            src="/main.svg"   
            alt="Winter of Code Social"
            width={350}
            height={120}
            priority
            className="mx-auto h-auto w-72 md:w-[32rem]"
          />
          <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
            Whether you’re a beginner or a pro, this winter is your chance to dive into open source, team up, and make an impact.
          </p>
        </div>

        {/* Event Dates */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-[var(--muted)]">
          <div className="stat-pill">
            <span className="text-[var(--frost)]">Registration:</span>
            Oct 1 - Dec 31, 2026
          </div>
          <div className="stat-pill">
            <span className="text-[var(--frost)]">Coding Period:</span>
            Nov 1, 2026 - Jan 31, 2027
          </div>
          <div className="stat-pill">
            <span className="text-[var(--frost)]">Certificates:</span>
            Feb 10, 2027
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
              aria-controls="register-menu"
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
              <div id="register-menu" className="absolute top-full mt-2 w-64 panel rounded-lg shadow-xl z-50">
              <div className="p-2">
                {roles.map((role) => (
                  <a
                    key={role.name}
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[var(--bg)] transition-colors duration-200 group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <role.icon size={18} className="text-[var(--frost)]" aria-hidden="true" />
                    <span className="text-[var(--text)] group-hover:text-[var(--frost)]">
                      {role.name}
                    </span>
                    <ExternalLink
                      size={14}
                      className="ml-auto text-[var(--muted)] group-hover:text-[var(--frost)]"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
              </div>
            )}
            </div>

          {/* Leaderboard Button */}
          <Link
            href="/leaderboard"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View Leaderboard
          </Link>
        </div>

        {/* Impact Stats */}
        <p className="text-sm text-[var(--muted)] -mb-4">Our impact so far</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">
              <AnimatedCounter value={10000} duration={2000} suffix="+" />
            </div>
            <div className="text-sm text-[var(--muted)]">Developers</div>
          </div>
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">
              <AnimatedCounter value={1500} duration={2000} suffix="+" />
            </div>
            <div className="text-sm text-[var(--muted)]">Resources</div>
          </div>
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">
              <AnimatedCounter value={500} duration={2000} suffix="+" />
            </div>
            <div className="text-sm text-[var(--muted)]">PRs</div>
          </div>
          <div className="stat-pill flex-col">
            <div className="text-2xl font-bold text-[var(--frost)]">
              <AnimatedCounter value={50} duration={2000} suffix="+" />
            </div>
            <div className="text-sm text-[var(--muted)]">Events</div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40"
          aria-hidden="true"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </section>
  );
}