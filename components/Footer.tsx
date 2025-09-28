import Link from 'next/link';
import { MessageCircle, Mail } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  const resources = [
    { name: 'Resources', href: '/resources' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="relative z-10 mt-20 panel border-t border-[rgba(154,215,255,0.12)] border-l-0 border-r-0 border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
          src="/logo.svg" 
          alt="Winter of Code Social"
          width={160}
          height={40}
          className="h-auto w-auto"
        />
            <p className="text-[var(--muted)] max-w-sm">
              Building the future of open source through community-driven development.
            </p>
            <div className="text-sm text-[var(--muted)]">
              #WinterofCodeSocial #WOCS
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[var(--text)]">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--muted)] hover:text-[var(--frost)] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[var(--text)]">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="https://discord.gg/MSTNyRSPYW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Open Discord
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'codesocialcommunity@gmail.com'}`}
                className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(154,215,255,0.12)] text-center">
          <a
            href="https://codesocial.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 mb-4 border border-[var(--frost)]"
          >
            Join Code Social
          </a>
          <p className="text-[var(--muted)]">
            &copy; 2025 Code Social Community. Made with ❄️ for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}