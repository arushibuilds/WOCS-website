import Hero from '@/components/Hero';
import LogoWall from '@/components/LogoWall';
import Image from 'next/image';
import { CalendarDays, Clock, MapPin, MessageCircle, Ticket } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Sessions / Workshops - Coming Soon */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="panel rounded-2xl p-8 md:p-12 text-center space-y-6">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Sessions & Workshops <span className="text-[var(--frost)]">Coming Soon</span>
            </h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              We're preparing an exciting lineup of sessions and workshops featuring industry experts. Stay tuned for announcements about learning opportunities and mentorship from the community.
            </p>
            <div className="text-[var(--frost)] font-semibold">
              Check back soon for session details and registration!
            </div>
          </div>
        </div>
      </section>

      {/* Code Social Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Code Social <span className="text-[var(--frost)]">Impact</span>
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Building community, fostering collaboration, and creating meaningful impact through open source development.
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
                href="https://discord.gg/MSTNyRSPYW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join Discord Community
              </a>
              <div className="text-sm text-[var(--muted)]">
                Cognize • Connect • Cultivate
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
