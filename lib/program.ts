// Single source of truth for WOCS program facts shown across the site.
//
// Rule for editing this file: only add information the organizing team has
// confirmed. Anything not yet decided stays `null` (or an empty list) and the
// site renders a "To be announced" state instead of a made-up value.

export const EDITION = 'WOCS 2026';

/* ------------------------------------------------------------------ Dates */

export interface Milestone {
  title: string;
  /** Human-readable date, or null while the date is not yet announced. */
  date: string | null;
  /** ISO date (YYYY-MM-DD) used to compute timeline status; null if TBA. */
  start: string | null;
  description: string;
  icon: 'users' | 'code' | 'trophy' | 'calendar' | 'award' | 'folder';
}

export const milestones: Milestone[] = [
  {
    title: 'Registrations Open',
    date: 'Open now',
    start: '2026-10-01', // used only to order the timeline status; not displayed
    description: 'Contributors, mentors, and project admins can start registering.',
    icon: 'users',
  },
  {
    title: 'Projects Announced & Coding Period Begins',
    date: 'November 1, 2026',
    start: '2026-11-01',
    description:
      'Participating projects are published on the Projects page and the official coding period starts. Let the collaboration begin!',
    icon: 'code',
  },
  {
    title: 'Leaderboard Goes Live',
    date: 'November 5, 2026',
    start: '2026-11-05',
    description: 'Track contributions and see how you rank across the community.',
    icon: 'trophy',
  },
  {
    title: 'Coding Period Ends',
    date: 'January 31, 2027',
    start: '2027-01-31',
    description: 'Final submissions and project evaluations.',
    icon: 'calendar',
  },
  {
    title: 'Certificates & Winners Announced',
    date: 'February 10, 2027',
    start: '2027-02-10',
    description:
      'Recognition and certificates distributed to participants, and top contributors announced. This marks the end of the program.',
    icon: 'award',
  },
];

export const keyDates = {
  registration: 'Open',
  codingPeriod: 'November 1, 2026 – January 31, 2027',
  projectsLive: 'November 1, 2026',
  leaderboardLive: 'November 5, 2026',
  certificates: 'February 10, 2027',
  projectSubmissionDeadline: null as string | null, // TODO(organizers)
};

/* --------------------------------------------------------- Community impact */

export interface ImpactStat {
  label: string;
  value: number;
  suffix?: string;
  /** Where the number comes from, so it can be re-checked later. */
  source: string;
}

// Verified numbers from previous WOCS editions. Add a stat only once the
// organizing team has confirmed it; the section hides itself when empty.
export const pastEditionStats: { edition: string; stats: ImpactStat[] } = {
  edition: 'WOCS 2025',
  stats: [
    { label: 'People joined', value: 1500, suffix: '+', source: 'Organizing team' },
    { label: 'Projects', value: 100, suffix: '+', source: 'Organizing team' },
    { label: 'Mentors', value: 70, suffix: '+', source: 'Organizing team' },
    { label: 'PRs', value: 1000, suffix: '+', source: 'Organizing team' },
  ],
};

/* ------------------------------------------------------ Sessions & workshops */

export interface ProgramEvent {
  title: string;
  /** Display date and time, e.g. "Tue, 20 Jan 2027 • 08:00 PM IST". */
  dateTime: string;
  /** ISO timestamp used to split upcoming vs. past sessions. */
  startsAt: string;
  description: string;
  host?: { name: string; url?: string };
  location?: string;
  poster?: { src: string; alt: string };
  registrationUrl?: string;
  calendarUrl?: string;
  recordingUrl?: string;
}

// Add confirmed sessions here. While the list is empty the site shows the
// "Sessions & Workshops Coming Soon" state.
export const events: ProgramEvent[] = [];

/* ------------------------------------------------------------- Leaderboard */

// Points per merged pull request, scaled by issue difficulty. These are the
// values already published on the leaderboard page; change them only when the
// official rules change.
export const pointsSystem = [
  { level: 'Beginner', points: '2 pts', description: 'Docs, typo fixes, and good-first-issue PRs' },
  { level: 'Intermediate', points: '5 pts', description: 'Bug fixes, tests, and small feature work' },
  { level: 'Advanced', points: '11 pts', description: 'Major features, refactors, and architecture work' },
];

export const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner': return 'text-green-400 bg-green-400/20';
    case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
    case 'Advanced': return 'text-red-400 bg-red-400/20';
    default: return 'text-[var(--muted)] bg-[var(--muted)]/20';
  }
};

/* ------------------------------------------------------- Pending policies */

// Program rules that the organizing team has not finalised yet. Each one is
// shown as "To be announced" until it is filled in.
export const pendingPolicies = {
  certificateEligibility: 'To be eligible for a certificate, you need at least one merged pull request.' as string | null,
};

export const TBA = 'To be announced';
