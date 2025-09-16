'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 frost-border border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16 flex-nowrap whitespace-nowrap">
          {/* Logo */}
          <Link href="/" className="flex items-center font-bold text-xl text-[var(--frost)] gap-2">
            <Image
              src="/icon.png"
              alt="Winter of Code Social Logo"
              width={24}
              height={24}
              priority
            />
            Winter of Code Social
            <span style={{marginRight: '30px'}}></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block w-full">
            <div className="flex items-baseline justify-evenly flex-nowrap whitespace-nowrap w-full">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[var(--muted)] hover:text-[var(--frost)] text-base font-medium transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-[var(--panel)]"
                    style={{whiteSpace: 'nowrap'}}>
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA Buttons and Links */}
          <div className="hidden md:flex gap-4 items-center flex-nowrap whitespace-nowrap">
            <Link
              href="/leaderboard"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Leaderboard
            </Link>
            <a
              href="https://codesocial.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 border border-[var(--frost)]"
            >
              Join Code Social
            </a>
            <a
              href="https://discord.gg/MSTNyRSPYW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 border border-[var(--frost)]"
            >
              Discord
            </a>
            <a
              href="mailto:codesocialcommunity@gmail.com"
              className="btn-secondary inline-flex items-center gap-2 border border-[var(--frost)]"
            >
              Email
            </a>
            <div className="dropdown">
              <button className="btn-secondary inline-flex items-center gap-2 border border-[var(--frost)]">Register</button>
              <div className="dropdown-content absolute bg-white shadow-lg rounded p-2 mt-2 z-50">
                <a href="https://forms.gle/UNzHDjYAMkYpoYPy6" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Contributor Form</a>
                <a href="https://forms.gle/PT1db4BeP4kQDNrG8" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Project Admin Form</a>
                <a href="https://forms.gle/PWRP2BM4DqGbqh6w5" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Mentor Form</a>
                <a href="https://forms.gle/2KYLfaDDVyCQA6GQA" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Community Partner Form</a>
                <a href="https://forms.gle/WSFhJUNJzGxQ2ZfG8" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Hiring Form</a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text)] hover:text-[var(--frost)] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 panel border-t border-[rgba(154,215,255,0.12)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-[var(--muted)] hover:text-[var(--frost)] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <a
                href="/leaderboard"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                View Leaderboard
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="px-3 py-2">
              <a href="https://codesocial.tech" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 w-full justify-center border border-[var(--frost)]" onClick={() => setIsOpen(false)}>Join Code Social</a>
            </div>
            <div className="px-3 py-2">
              <a href="https://discord.gg/MSTNyRSPYW" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 w-full justify-center border border-[var(--frost)]" onClick={() => setIsOpen(false)}>Discord</a>
            </div>
            <div className="px-3 py-2">
              <a href="mailto:codesocialcommunity@gmail.com" className="btn-secondary inline-flex items-center gap-2 w-full justify-center border border-[var(--frost)]" onClick={() => setIsOpen(false)}>Email</a>
            </div>
            <div className="px-3 py-2">
              <div className="dropdown">
                <button className="btn-secondary inline-flex items-center gap-2 w-full justify-center border border-[var(--frost)]">Register</button>
                <div className="dropdown-content absolute bg-white shadow-lg rounded p-2 mt-2 z-50">
                  <a href="https://forms.gle/UNzHDjYAMkYpoYPy6" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Contributor Form</a>
                  <a href="https://forms.gle/PT1db4BeP4kQDNrG8" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Project Admin Form</a>
                  <a href="https://forms.gle/PWRP2BM4DqGbqh6w5" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Mentor Form</a>
                  <a href="https://forms.gle/2KYLfaDDVyCQA6GQA" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Community Partner Form</a>
                  <a href="https://forms.gle/WSFhJUNJzGxQ2ZfG8" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-gray-100">Hiring Form</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}