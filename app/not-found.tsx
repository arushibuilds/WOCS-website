import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6">
      <h1 className="text-5xl font-bold text-[var(--frost)]">404</h1>
      <p className="text-xl text-[var(--muted)]">We couldn’t find that page.</p>
      <Link href="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}
