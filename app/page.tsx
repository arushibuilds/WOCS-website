import Hero from '@/components/Hero';
import LogoWall from '@/components/LogoWall';
import Image from 'next/image';
import { CalendarDays, Clock, MapPin, MessageCircle, Ticket } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Sessions / Workshops */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="panel rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/wocs-session2.png"
                alt="Autonomous Engineering session poster with Jeremy Alston"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[var(--panel)] text-[var(--frost)] border border-[var(--frost)]/30">
                <CalendarDays size={16} />
                Upcoming Session
              </div>

              <div className="space-y-2">
                <p className="text-sm text-[var(--muted)]">Winter of Code Social</p>
                <h2 className="text-3xl md:text-4xl font-bold">Autonomous Engineering with Opulentia AI</h2>
                <p className="text-lg text-[var(--muted)]">
                  with{' '}
                  <a
                    href="https://www.linkedin.com/in/jeremy-alston-303670139/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--frost)] hover:underline"
                  >
                    Jeremy Alston
                  </a>
                  , Founder & Chief AI Researcher at Opulentia AI
                </p>
              </div>

              <div className="space-y-2 text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[var(--frost)]" />
                  <span>08:30 PM IST | 09:00 AM CST • Tue, 23 Dec 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--frost)]" />
                  <span>Online</span>
                </div>
              </div>

              <p className="text-[var(--muted)] leading-relaxed">
                Autonomous engineering is no longer a concept, it is happening now. Join us for insights into Agentic General Intelligence and how Opulentia is enabling people to achieve what once felt impossible. Backed by NVIDIA, AWS, and Daytona.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={process.env.NEXT_PUBLIC_SESSION_LINK || 'https://depaul.zoom.us/j/93744600941'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Ticket size={16} />
                  Join Event
                </a>
                <a
                  href={
                    process.env.NEXT_PUBLIC_SESSION_CAL ||
                    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Autonomous%20Engineering%20with%20Opulentia%20AI%20%E2%80%94%20Winter%20of%20Code%20Social&dates=20251223T150000Z/20251223T160000Z&details=Join%20Jeremy%20Alston,%20Founder%20and%20Chief%20AI%20Researcher%20at%20Opulentia,%20for%20insights%20into%20Agentic%20General%20Intelligence.%20Backed%20by%20NVIDIA,%20AWS,%20and%20Daytona.%20Join%20live:%20https%3A%2F%2Fdepaul.zoom.us%2Fj%2F93744600941&location=Online%20(Zoom)'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <CalendarDays size={16} />
                  Add to Calendar
                </a>
              </div>
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
