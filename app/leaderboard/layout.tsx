import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leaderboard',
  description: 'Track contributor points and merged PRs during Winter of Code Social.',
  alternates: { canonical: '/leaderboard' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
