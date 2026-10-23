'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CODE_SOCIAL_URL } from '@/lib/links';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 frost-border border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16 flex-nowrap whitespace-nowrap">
          {/* Logo */}
          <Link href="/" className="flex items-center font-bold text-xl text-[var(--frost)] gap-2">
            <Image
              src="/logo.svg"
              alt="Winter of Code Social Logo"
              width={340}
              height={180}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:block w-full">
            <div className="flex items-baseline justify-evenly flex-nowrap whitespace-nowrap w-full">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`hover:text-[var(--frost)] text-base font-medium transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-[var(--panel)] ${
                      isActive(item.href) ? 'text-[var(--frost)]' : 'text-[var(--muted)]'
                    }`}
                    style={{whiteSpace: 'nowrap'}}>
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden xl:flex gap-4 items-center flex-nowrap whitespace-nowrap">
            <Link
              href="/leaderboard"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Leaderboard
            </Link>
            <a
              href={CODE_SOCIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 border border-[var(--frost)]"
            >
              Join Code Social
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text)] hover:text-[var(--frost)] transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-menu" className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 panel border-t border-[rgba(154,215,255,0.12)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`block px-3 py-2 hover:text-[var(--frost)] transition-colors duration-200 ${
                  isActive(item.href) ? 'text-[var(--frost)]' : 'text-[var(--muted)]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link
                href="/leaderboard"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                View Leaderboard
              </Link>
            </div>
            <div className="px-3 pb-2">
              <a
                href={CODE_SOCIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 w-full justify-center border border-[var(--frost)]"
              >
                Join Code Social
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}