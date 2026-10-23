import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import EventsSection from '@/components/EventsSection';
import CommunityImpact from '@/components/CommunityImpact';
import LogoWall from '@/components/LogoWall';
import SupportPathway from '@/components/SupportPathway';
import Testimonials from '@/components/Testimonials';
import { MessageCircle } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/links';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Winter of Code Social</h1>
      {/* Hero Section */}
      <Hero />

      {/* What WOCS is + the six-step participant journey */}
      <HowItWorks />

      {/* Sessions / Workshops (shows "Coming Soon" until events are added in lib/program.ts) */}
      <EventsSection />

      {/* Code Social Impact */}
      <CommunityImpact />

      {/* Sponsor Logo Rail */}
      <LogoWall />

      {/* Discord Forum Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="panel p-8 md:p-12 rounded-2xl text-center space-y-6">
            <MessageCircle size={48} className="mx-auto text-[var(--frost)]" />
            <h2 className="text-2xl md:text-3xl font-bold">Join Our Community</h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Connect with fellow developers, get help from mentors, and stay updated on the latest announcements in our Discord community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={DISCORD_INVITE}
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

      {/* Where to get help */}
      <SupportPathway />

      {/* Testimonials from last year */}
      <Testimonials />

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
