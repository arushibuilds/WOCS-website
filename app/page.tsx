import Hero from '@/components/Hero';
import LogoWall from '@/components/LogoWall';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Code Social Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Code Social <span className="text-[var(--frost)]">Impact</span>
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Building communities, fostering collaboration, and creating meaningful impact through open source development.
          </p>
        </div>
      </section>

      {/* Sponsor Logo Rail */}
      <LogoWall />

      {/* Discord Forum Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="panel p-8 md:p-12 rounded-2xl text-center space-y-6">
            <MessageCircle size={48} className="mx-auto text-[var(--frost)]" />
            <h3 className="text-2xl md:text-3xl font-bold">Join Our Community</h3>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Connect with fellow developers, get help from mentors, and stay updated on the latest announcements in our Discord community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_INVITE || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join Discord Community
              </a>
              <div className="text-sm text-[var(--muted)]">
                Connect • Collaborate • Create
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-lg text-[var(--frost)] font-mono">
            #WinterofCodeSocial #WOCS
          </div>
        </div>
      </section>
    </>
  );
}