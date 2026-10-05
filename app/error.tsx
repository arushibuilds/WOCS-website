'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6">
      <h1 className="text-4xl font-bold text-[var(--frost)]">Something went wrong</h1>
      <p className="text-xl text-[var(--muted)]">Please try again.</p>
      <button onClick={reset} className="btn-primary">Try again</button>
    </div>
  );
}
