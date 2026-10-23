import AnimatedCounter from './AnimatedCounter';
import { pastEditionStats } from '@/lib/program';

export default function CommunityImpact() {
  const { edition, stats } = pastEditionStats;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Code Social <span className="text-[var(--frost)]">Impact</span>
        </h2>
        <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
          Building community, fostering collaboration, and creating meaningful impact through open source development.
        </p>

        {stats.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm text-[var(--muted)]">{edition} in numbers</p>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-pill flex-col min-w-[10rem]">
                  <div className="text-2xl font-bold text-[var(--frost)]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
