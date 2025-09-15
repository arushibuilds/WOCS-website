import Link from 'next/link';

export default function LeaderboardComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--frost)]">Leaderboard Coming Soon</h1>
      <p className="text-lg text-[var(--muted)] mb-8 max-w-xl">
        The leaderboard will be available from <span className="font-semibold text-[var(--frost)]">November 10, 2025</span>.<br />
        Stay tuned and keep contributing!
      </p>
      <Link href="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}
