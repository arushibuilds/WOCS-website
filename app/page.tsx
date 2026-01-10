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
                src="/session3.png"
                alt="From MERN Stack to Open Source session poster with Aarti Jethaniya"
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
                <h2 className="text-3xl md:text-4xl font-bold">From MERN Stack to Open Source: A Practical Guide for Beginners</h2>
                <p className="text-lg text-[var(--muted)]">
                  with{' '}
                  <a
                    href="https://www.linkedin.com/in/aartijethaniya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--frost)] hover:underline"
                  >
                    Aarti Jethaniya
                  </a>
                </p>
              </div>

              <div className="space-y-2 text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[var(--frost)]" />
                  <span>08:00 PM IST • Tue, 20 Jan 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--frost)]" />
                  <span>Online</span>
                </div>
              </div>

              <p className="text-[var(--muted)] leading-relaxed">
                Learn the foundations of modern web development with the MERN stack. In this practical guide for beginners, explore MongoDB, Express, React, and Node.js through real-world examples and best practices for contributing to open source projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={process.env.NEXT_PUBLIC_SESSION_LINK || 'https://depaul.zoom.us/j/99897455517'}
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
                    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=From%20MERN%20Stack%20to%20Open%20Source:%20A%20Practical%20Guide%20for%20Beginners%20%E2%80%94%20Winter%20of%20Code%20Social&dates=20260120T020000Z/20260120T030000Z&details=Learn%20the%20foundations%20of%20modern%20web%20development%20with%20the%20MERN%20stack%20from%20Aarti%20Jethaniya.%20Join%20live:%20https%3A%2F%2Fdepaul.zoom.us%2Fj%2F99897455517&location=Online%20(Zoom)'
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

          <div className="panel rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center mt-8">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/session4.png"
                alt="Modern API Workflows for Developers session poster with Ganesh Patil"
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
                <h2 className="text-3xl md:text-4xl font-bold">Modern API Workflows for Developers</h2>
                <p className="text-lg text-[var(--muted)]">
                  with{' '}
                  <a
                    href="https://www.linkedin.com/in/devgancode/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--frost)] hover:underline"
                  >
                    Ganesh Patil
                  </a>
                </p>
              </div>

              <div className="space-y-2 text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[var(--frost)]" />
                  <span>08:30 PM IST • Thu, 15 Jan 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--frost)]" />
                  <span>Online</span>
                </div>
              </div>

              <p className="text-[var(--muted)] leading-relaxed">
                Master modern API development and workflow best practices. Explore RESTful and GraphQL APIs, authentication, and integration patterns that scale. Learn from industry practices and optimize your development process.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={process.env.NEXT_PUBLIC_SESSION_LINK_2 || 'https://depaul.zoom.us/j/98036060173'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Ticket size={16} />
                  Join Event
                </a>
                <a
                  href={
                    process.env.NEXT_PUBLIC_SESSION_CAL_2 ||
                    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Modern%20API%20Workflows%20for%20Developers%20%E2%80%94%20Winter%20of%20Code%20Social&dates=20260115T020000Z/20260115T030000Z&details=Master%20modern%20API%20development%20and%20workflow%20best%20practices%20with%20Ganesh%20Patil.%20Join%20live:%20https%3A%2F%2Fdepaul.zoom.us%2Fj%2F98036060173&location=Online%20(Zoom)'
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
