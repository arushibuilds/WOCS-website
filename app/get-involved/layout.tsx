import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Join Winter of Code Social as a contributor, mentor, or project admin.',
  alternates: { canonical: '/get-involved' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
