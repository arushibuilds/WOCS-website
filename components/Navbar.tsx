"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Projects', href: '/projects' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 frost-border border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-[var(--frost)]">
            Winter of Code Social
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--muted)] hover:text-[var(--frost)] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={process.env.NEXT_PUBLIC_LEADERBOARD_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Leaderboard
              <ExternalLink size={16} />
            </a>
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
                href={process.env.NEXT_PUBLIC_LEADERBOARD_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                View Leaderboard
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}