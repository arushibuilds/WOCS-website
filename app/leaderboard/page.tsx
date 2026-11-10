"use client";
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SessionBanner from '@/components/SessionBanner';
import { CONTACT_EMAIL, DISCORD_INVITE, LEADERBOARD_API } from '@/lib/links';
import { getLevelColor, keyDates, pointsSystem } from '@/lib/program';
import { Search, Trophy, ExternalLink, BarChart3, GitMerge, RefreshCw, Flag } from 'lucide-react';

interface Contributor {
  username: string;
  points: number;
}

/** Shape returned by the leaderboard API. */
interface ApiEntry {
  contributor: string;
  points: number;
}

const aboutRankings = [
  {
    icon: BarChart3,
    title: 'What the rankings show',
    body: 'Contributors ranked by total points earned from merged pull requests to participating WOCS 2026 projects. Rank always follows points.',
  },
  {
    icon: GitMerge,
    title: 'Which contributions count',
    body: `Merged pull requests to participating projects during the coding period (${keyDates.codingPeriod}). Unmerged or closed PRs don’t earn points.`,
  },
  {
    icon: RefreshCw,
    title: 'When rankings update',
    body: 'Your points and rank update within about 10–15 minutes after your pull request is merged. Refresh the page to see the latest standings.',
  },
  {
    icon: Flag,
    title: 'Reporting inaccuracies',
    body: 'If a merged PR is missing or your points look wrong, contact the organizing team with your GitHub username and links to the PRs.',
  },
];

export default function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    fetch(LEADERBOARD_API)
      .then((res) => {
        if (!res.ok) throw new Error(`Leaderboard request failed: ${res.status}`);
        return res.json() as Promise<ApiEntry[]>;
      })
      .then((data) => {
        if (cancelled) return;
        setContributors(data.map((entry) => ({ username: entry.contributor, points: entry.points })));
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Contributors with equal points share a rank (1, 2, 2, 4).
  const ranked = useMemo(() => {
    const sorted = [...contributors].sort((a, b) => b.points - a.points);
    return sorted.map((contributor) => ({
      ...contributor,
      rank: sorted.findIndex((c) => c.points === contributor.points) + 1,
    }));
  }, [contributors]);

  const visible = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return ranked.filter((contributor) => contributor.username.toLowerCase().includes(term));
  }, [ranked, searchTerm]);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SessionBanner />

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contributor <span className="text-[var(--frost)]">Leaderboard</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Every merged pull request earns points. Track how the community is working together during Winter of Code Social 2026.
          </p>
        </div>

        {status === 'loading' ? (
          <div className="flex justify-center py-24 text-[var(--muted)]" role="status">
            Loading leaderboard…
          </div>
        ) : status === 'error' ? (
          <div className="panel rounded-2xl text-center py-16 px-6">
            <h2 className="text-xl font-semibold mb-2">Couldn’t load the leaderboard</h2>
            <p className="text-[var(--muted)]">Please refresh the page or try again in a few minutes.</p>
          </div>
        ) : ranked.length > 0 ? (
          <>
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search contributors..."
                  aria-label="Search contributors"
                  className="w-full panel rounded-lg pl-12 pr-4 py-3 text-[var(--text)] placeholder:text-[var(--muted)]
                             focus:outline-none focus:border-[var(--frost)] focus:shadow-[0_0_20px_rgba(154,215,255,0.15)] transition-all duration-300"
                />
              </div>
            </div>

            {/* Rankings */}
            <div className="panel rounded-2xl overflow-hidden">
              {/* Column headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-[rgba(154,215,255,0.12)] text-sm font-semibold text-[var(--muted)]">
                <div className="col-span-1">Rank</div>
                <div className="col-span-8">Contributor</div>
                <div className="col-span-3 text-right">Points</div>
              </div>

              {visible.map((contributor) => (
                <div
                  key={contributor.username}
                  className="grid grid-cols-[auto_1fr_auto] md:grid-cols-12 gap-4 px-6 py-4 items-center
                             border-b border-[rgba(154,215,255,0.12)] last:border-b-0
                             hover:bg-[var(--bg)] transition-colors duration-200"
                >
                  <div className="md:col-span-1">
                    <span
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${
                        contributor.rank <= 3
                          ? 'bg-[var(--frost)]/20 text-[var(--frost)]'
                          : 'bg-[var(--muted)]/10 text-[var(--muted)]'
                      }`}
                    >
                      {contributor.rank}
                    </span>
                  </div>

                  <div className="md:col-span-8 flex items-center gap-3 min-w-0">
                    <img
                      src={`https://github.com/${contributor.username}.png?size=80`}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      className="w-10 h-10 rounded-full frost-border bg-[var(--bg)] flex-shrink-0"
                    />
                    <a
                      href={`https://github.com/${contributor.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold truncate hover:text-[var(--frost)] hover:underline"
                    >
                      @{contributor.username}
                    </a>
                  </div>

                  <div className="md:col-span-3 text-right font-bold text-[var(--frost)] whitespace-nowrap">
                    {contributor.points} pts
                  </div>
                </div>
              ))}

              {visible.length === 0 && (
                <div className="text-center py-12 px-6">
                  <h2 className="text-xl font-semibold mb-2">No contributors found</h2>
                  <p className="text-[var(--muted)] mb-6">
                    Try a different name or username to find who you’re looking for.
                  </p>
                  <button onClick={() => setSearchTerm('')} className="btn-primary">
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* No merged PRs yet */
          <div className="flex flex-col items-center justify-center py-24">
            <div className="text-center space-y-6">
              <Trophy size={64} className="mx-auto text-[var(--frost)]" />
              <h2 className="text-4xl md:text-5xl font-bold">
                No Points <span className="text-[var(--frost)]">Yet</span>
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                The leaderboard is live. Rankings appear here as soon as the first pull requests are
                merged. Find a project and get yours in.
              </p>
              <div className="pt-4">
                <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                  Browse Projects
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* About the rankings */}
        <div className="mt-16 panel p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">How the Leaderboard Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aboutRankings.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex items-center gap-3">
                  <item.icon size={20} className="text-[var(--frost)]" aria-hidden="true" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-[var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--muted)] text-center mt-8">
            Full rules are in the{' '}
            <Link href="/guidelines#leaderboard-rules" className="text-[var(--frost)] hover:underline">
              contribution &amp; leaderboard guidelines
            </Link>
            . Found an error? Report it on{' '}
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="text-[var(--frost)] hover:underline">
              Discord
            </a>{' '}
            or email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--frost)] hover:underline">
              {CONTACT_EMAIL}
            </a>{' '}
            with your GitHub username and PR links.
          </p>
        </div>

        {/* How Points Work */}
        <div className="mt-16 panel p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2 text-center">How Points Work</h2>
          <p className="text-[var(--muted)] text-center max-w-2xl mx-auto mb-8">
            Points are awarded for merged pull requests, scaled by issue difficulty.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pointsSystem.map((tier) => (
              <div key={tier.level} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-sm px-3 py-1 rounded-full ${getLevelColor(tier.level)}`}>
                    {tier.level}
                  </span>
                  <span className="font-semibold text-[var(--frost)]">{tier.points}</span>
                </div>
                <p className="text-[var(--muted)]">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 panel p-8 md:p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Want to See Your Name Here?</h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Register as a contributor, pick up an issue, and start shipping. Every merged PR moves
            you up the board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-involved" className="btn-primary inline-flex items-center gap-2">
              Register Now
            </Link>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Join Discord
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
