"use client";
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, Trophy, Medal, Award, GitPullRequest, Star, Info, ExternalLink } from 'lucide-react';

interface Contributor {
  username: string;
  name: string;
  projects: number;
  prs: number;
  points: number;
}

/**
 * Set to false before the event goes live to show the "coming soon" state,
 * or replace `sampleContributors` with the real standings.
 */
const SHOW_SAMPLE_DATA = true;

const LAST_UPDATED = 'Updated weekly during the coding period';

const sampleContributors: Contributor[] = [
  { username: 'contributor-one', name: 'Contributor One', projects: 4, prs: 21, points: 460 },
  { username: 'contributor-two', name: 'Contributor Two', projects: 3, prs: 18, points: 425 },
  { username: 'contributor-three', name: 'Contributor Three', projects: 3, prs: 16, points: 390 },
  { username: 'contributor-four', name: 'Contributor Four', projects: 2, prs: 14, points: 320 },
  { username: 'contributor-five', name: 'Contributor Five', projects: 3, prs: 12, points: 295 },
  { username: 'contributor-six', name: 'Contributor Six', projects: 2, prs: 11, points: 260 },
  { username: 'contributor-seven', name: 'Contributor Seven', projects: 2, prs: 9, points: 225 },
  { username: 'contributor-eight', name: 'Contributor Eight', projects: 1, prs: 8, points: 180 },
  { username: 'contributor-nine', name: 'Contributor Nine', projects: 1, prs: 6, points: 145 },
  { username: 'contributor-ten', name: 'Contributor Ten', projects: 1, prs: 5, points: 110 },
];

const contributors: Contributor[] = SHOW_SAMPLE_DATA ? sampleContributors : [];

const pointsSystem = [
  { level: 'Beginner', points: '10 pts', description: 'Docs, typo fixes, and good-first-issue PRs' },
  { level: 'Intermediate', points: '25 pts', description: 'Bug fixes, tests, and small feature work' },
  { level: 'Advanced', points: '50 pts', description: 'Major features, refactors, and architecture work' },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner': return 'text-green-400 bg-green-400/20';
    case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
    case 'Advanced': return 'text-red-400 bg-red-400/20';
    default: return 'text-[var(--muted)] bg-[var(--muted)]/20';
  }
};

const podiumIcons = [Trophy, Medal, Award];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'points' | 'prs'>('points');

  // Official rank always follows points, even when the table is sorted by PRs.
  const ranked = useMemo(
    () =>
      [...contributors]
        .sort((a, b) => b.points - a.points)
        .map((contributor, index) => ({ ...contributor, rank: index + 1 })),
    []
  );

  const visible = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return ranked
      .filter(
        (contributor) =>
          contributor.name.toLowerCase().includes(term) ||
          contributor.username.toLowerCase().includes(term)
      )
      .sort((a, b) => (sortBy === 'points' ? b.points - a.points : b.prs - a.prs));
  }, [ranked, searchTerm, sortBy]);

  const podium = ranked.slice(0, 3);
  const totalPRs = ranked.reduce((sum, contributor) => sum + contributor.prs, 0);
  const totalPoints = ranked.reduce((sum, contributor) => sum + contributor.points, 0);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contributor <span className="text-[var(--frost)]">Leaderboard</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Every merged pull request earns points. Track how the community is working together during Winter of Code Social.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <div className="stat-pill">
              <Star size={16} className="text-[var(--frost)]" />
              <span className="text-[var(--frost)]">{ranked.length}</span>
              Contributors
            </div>
            <div className="stat-pill">
              <GitPullRequest size={16} className="text-[var(--frost)]" />
              <span className="text-[var(--frost)]">{totalPRs}</span>
              Merged PRs
            </div>
            <div className="stat-pill">
              <Trophy size={16} className="text-[var(--frost)]" />
              <span className="text-[var(--frost)]">{totalPoints}</span>
              Points Awarded
            </div>
          </div>

          <div className="text-sm text-[var(--muted)]">{LAST_UPDATED}</div>
        </div>

        {ranked.length > 0 ? (
          <>
            {SHOW_SAMPLE_DATA && (
              <div className="panel rounded-xl p-4 mb-12 flex items-start gap-3">
                <Info size={18} className="text-[var(--frost)] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[var(--muted)]">
                  <span className="text-[var(--frost)] font-semibold">Preview:</span> these are
                  placeholder standings so you can see the layout. Live rankings begin when the
                  coding period opens on November 1, 2026.
                </p>
              </div>
            )}

            {/* Podium */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {podium.map((contributor, index) => {
                const Icon = podiumIcons[index];
                return (
                  <div
                    key={contributor.username}
                    className={`panel rounded-2xl p-6 text-center space-y-4 transition-all duration-300 ${
                      index === 0 ? 'frost-glow md:-translate-y-4 border-[var(--frost)]' : ''
                    }`}
                  >
                    <div className="flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          index === 0
                            ? 'bg-[var(--frost)] text-[var(--bg)]'
                            : 'bg-[var(--panel)] border-2 border-[var(--frost)] text-[var(--frost)]'
                        }`}
                      >
                        <Icon size={28} />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[var(--muted)] mb-1">Rank #{contributor.rank}</div>
                      <h3 className="text-xl font-semibold">{contributor.name}</h3>
                      <div className="text-sm text-[var(--muted)]">@{contributor.username}</div>
                    </div>
                    <div className="flex justify-center gap-6 pt-2">
                      <div>
                        <div className="text-2xl font-bold text-[var(--frost)]">
                          {contributor.points}
                        </div>
                        <div className="text-xs text-[var(--muted)]">Points</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[var(--frost)]">
                          {contributor.prs}
                        </div>
                        <div className="text-xs text-[var(--muted)]">PRs</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
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
                             focus:outline-none focus:border-[var(--frost)] focus:frost-glow transition-all duration-300"
                />
              </div>
              <div className="flex gap-2">
                {([
                  { id: 'points', label: 'Points' },
                  { id: 'prs', label: 'Merged PRs' },
                ] as const).map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                      sortBy === option.id
                        ? 'bg-[var(--frost)] text-[var(--bg)] shadow-lg'
                        : 'panel hover:frost-glow'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rankings */}
            <div className="panel rounded-2xl overflow-hidden">
              {/* Column headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-[rgba(154,215,255,0.12)] text-sm font-semibold text-[var(--muted)]">
                <div className="col-span-1">Rank</div>
                <div className="col-span-5">Contributor</div>
                <div className="col-span-2 text-center">Projects</div>
                <div className="col-span-2 text-center">Merged PRs</div>
                <div className="col-span-2 text-right">Points</div>
              </div>

              {visible.map((contributor) => (
                <div
                  key={contributor.username}
                  className="grid grid-cols-2 md:grid-cols-12 gap-4 px-6 py-4 items-center
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

                  <div className="col-span-2 md:col-span-5 flex items-center gap-3 order-first md:order-none">
                    <div className="w-10 h-10 rounded-full frost-border bg-[var(--bg)] flex items-center justify-center text-sm font-semibold text-[var(--frost)] flex-shrink-0">
                      {getInitials(contributor.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold truncate">{contributor.name}</div>
                      <div className="text-sm text-[var(--muted)] truncate">
                        @{contributor.username}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 md:text-center text-[var(--muted)]">
                    <span className="md:hidden text-sm">Projects: </span>
                    {contributor.projects}
                  </div>

                  <div className="md:col-span-2 md:text-center text-[var(--muted)]">
                    <span className="md:hidden text-sm">PRs: </span>
                    {contributor.prs}
                  </div>

                  <div className="col-span-2 md:col-span-2 md:text-right font-bold text-[var(--frost)]">
                    {contributor.points} pts
                  </div>
                </div>
              ))}

              {visible.length === 0 && (
                <div className="text-center py-12 px-6">
                  <h3 className="text-xl font-semibold mb-2">No contributors found</h3>
                  <p className="text-[var(--muted)] mb-6">
                    Try a different name or username to find who you're looking for.
                  </p>
                  <button onClick={() => setSearchTerm('')} className="btn-primary">
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Coming Soon */
          <div className="flex flex-col items-center justify-center py-24">
            <div className="text-center space-y-6">
              <Trophy size={64} className="mx-auto text-[var(--frost)]" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Leaderboard Coming <span className="text-[var(--frost)]">Soon</span>
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Rankings go live once the coding period begins on{' '}
                <strong>November 1, 2026</strong>. Register early, find a project, and get your
                first pull request ready.
              </p>
              <div className="pt-4">
                <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                  Browse Projects
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* How Points Work */}
        <div className="mt-16 panel p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-2 text-center">How Points Work</h3>
          <p className="text-[var(--muted)] text-center max-w-2xl mx-auto mb-8">
            Points are awarded for merged pull requests, scaled by issue difficulty. Standings are
            reviewed by mentors and refreshed weekly.
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
          <h3 className="text-2xl md:text-3xl font-bold">Want to See Your Name Here?</h3>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Register as a contributor, pick up an issue, and start shipping. Every merged PR moves
            you up the board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-involved" className="btn-primary inline-flex items-center gap-2">
              Register Now
            </Link>
            <a
              href="https://discord.gg/MSTNyRSPYW"
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
