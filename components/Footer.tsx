import Link from 'next/link';
import { MessageCircle, Mail, Snowflake, ArrowRight } from 'lucide-react';
import Image from "next/image";
import { CODE_SOCIAL_URL, CONTACT_EMAIL, DISCORD_INVITE, FORM_TEAM } from '@/lib/links';

export default function Footer() {
  const resources = [
    { name: 'Resources', href: '/resources' },
    { name: 'Guidelines', href: '/guidelines' },
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
            <h2 className="font-semibold text-[var(--text)]">Resources</h2>
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
            <h2 className="font-semibold text-[var(--text)]">Get in Touch</h2>
            <div className="space-y-3">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Open Discord
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
            <a
              href={FORM_TEAM}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-[var(--muted)] hover:text-[var(--frost)] transition-colors duration-200"
            >
              Want to help organize WOCS? Join the team<ArrowRight size={14} className="inline-block ml-1 -mt-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(154,215,255,0.12)] text-center">
          <a
            href={CODE_SOCIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 mb-4 border border-[var(--frost)]"
          >
            Join Code Social
          </a>
          <p className="text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Code Social Community. Made with <Snowflake size={16} className="inline-block -mt-0.5 text-[var(--frost)]" aria-label="snow" /> for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}