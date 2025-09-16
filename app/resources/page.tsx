import Link from 'next/link';
import { BookOpen, FileText, Linkedin, Video, Users, Gift } from 'lucide-react';

const resources = [
  {
    title: 'Quick Start Guide',
    icon: BookOpen,
    link: '#',
    desc: 'How to contribute to open source, GitHub basics, PRs, issues.',
    cta: 'Coming Soon',
    external: false,
  },
  {
    title: 'LinkedIn Templates',
    icon: Linkedin,
    link: '#',
    desc: 'LinkedIn templates to share your progress.',
    cta: 'Coming Soon',
    external: false,
  },
  {
    title: 'Community',
    icon: Users,
    link: 'https://discord.gg/MSTNyRSPYW',
    desc: 'Join our Discord & YouTube community.',
    cta: 'Join Discord',
    external: true,
  },
];


export default function Resources() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-[var(--frost)]">Resources</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((res, i) => (
          <div key={i} className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <res.icon size={40} className="mb-4 text-[var(--frost)]" />
            <h2 className="text-xl font-semibold mb-2">{res.title}</h2>
            <p className="text-[var(--muted)] mb-4 min-h-[48px]">{res.desc}</p>
            {res.external ? (
              <a href={res.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">{res.cta}</a>
            ) : (
              <a href={res.link} className="btn-secondary w-full cursor-not-allowed opacity-60">{res.cta}</a>
            )}
          </div>
        ))}
      </div>



      {/* Curated Learning Resources */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--frost)]">Curated Learning Resources</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">FreeCodeCamp</h3>
            <p className="text-[var(--muted)] mb-4">Interactive coding tutorials in web dev, data science, machine learning.</p>
            <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit FreeCodeCamp</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">CS50x (Harvard)</h3>
            <p className="text-[var(--muted)] mb-4">Legendary intro to computer science, free online.</p>
            <a href="https://cs50.harvard.edu/x/2023/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit CS50x</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">MDN Web Docs</h3>
            <p className="text-[var(--muted)] mb-4">The go-to reference for HTML, CSS, and JavaScript.</p>
            <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit MDN Web Docs</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">The Odin Project</h3>
            <p className="text-[var(--muted)] mb-4">Full free web dev curriculum, project-based.</p>
            <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit The Odin Project</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">GeeksforGeeks</h3>
            <p className="text-[var(--muted)] mb-4">Practice, explanations, and articles on algorithms, DS, and coding interviews.</p>
            <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit GeeksforGeeks</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">W3Schools</h3>
            <p className="text-[var(--muted)] mb-4">Beginner-friendly tutorials for web technologies.</p>
            <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit W3Schools</a>
          </div>
        </div>
      </div>

            <div className="mt-8 text-center">
        <span className="text-lg text-[var(--muted)]">Looking for more resources?&nbsp;
          <a href="https://codesocial.tech" target="_blank" rel="noopener noreferrer" className="underline text-[var(--frost)] font-semibold">Check Code Social!</a>
        </span>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="btn-secondary inline-block">Back to Home</Link>
      </div>
    </div>
  );
}
