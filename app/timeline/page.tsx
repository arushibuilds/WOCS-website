import { Calendar, Users, Code, Award } from 'lucide-react';

const timelineEvents = [
  {
    date: 'October 1',
    title: 'Registration Opens',
    description: 'Projects, and Mentors can start registering',
    icon: Users,
    status: 'completed'
  },
  {
    date: 'October 1',
    title: 'Contributor Registration Opens',
    description: 'Contributors can now register and browse available projects',
    icon: Code,
    status: 'completed'
  },
  {
    date: 'November 1',
    title: 'Coding Period Begins',
    description: 'The official coding period starts. Let the collaboration begin!',
    icon: Code,
    status: 'active'
  },
  {
    date: 'January 31',
    title: 'Coding Period Ends',
    description: 'Final submissions and project evaluations',
    icon: Calendar,
    status: 'upcoming'
  },
  {
    date: 'February 10',
    title: 'Certificates Awarded',
    description: 'Recognition and certificates distributed to participants',
    icon: Award,
    status: 'upcoming'
  }
];

export default function Timeline() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Event <span className="text-[var(--frost)]">Timeline</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Track the journey from registration to rewards. Here's what to expect throughout Winter of Code Social.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--frost)] opacity-30"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                  event.status === 'completed' ? 'bg-[var(--frost)] text-[var(--bg)]' :
                  event.status === 'active' ? 'bg-[var(--panel)] border-2 border-[var(--frost)] text-[var(--frost)]' :
                  'bg-[var(--panel)] border border-[var(--muted)] text-[var(--muted)]'
                }`}>
                  <event.icon size={24} />
                </div>

                {/* Content */}
                <div className="flex-1 panel p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-[var(--text)]">
                      {event.title}
                    </h3>
                    <div className={`text-sm px-3 py-1 rounded-full ${
                      event.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      event.status === 'active' ? 'bg-[var(--frost)]/20 text-[var(--frost)]' :
                      'bg-[var(--muted)]/20 text-[var(--muted)]'
                    }`}>
                      {event.date}
                    </div>
                  </div>
                  <p className="text-[var(--muted)]">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates Summary */}
        <div className="mt-16 panel p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Important Dates</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="font-semibold text-[var(--frost)]">Registration Phase</div>
              <div className="text-[var(--muted)]">October 1 - December 31, 2025</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[var(--frost)]">Coding Period</div>
              <div className="text-[var(--muted)]">November 1, 2025 - January 31, 2025</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[var(--frost)]">Announcing Top Winners</div>
              <div className="text-[var(--muted)]">February 10, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}