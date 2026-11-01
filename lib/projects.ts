export interface Project {
  id: string;
  title: string;
  description: string;
  /** Broad languages and domains (e.g. Python, Web, AI/ML). Used for the filter. */
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  repository: string;
  /** Link to CONTRIBUTING.md or equivalent, if the project has one. */
  contributingGuide?: string;
  maintainers?: { name: string; github?: string }[];
  mentors?: { name: string; github?: string }[];
}

// WOCS 2026 participating projects. Only add projects that have been
// accepted by the organizing team. The Projects page shows the
// "Coming Soon" state while this list is empty.
//
// Example entry:
// {
//   id: '1',
//   title: 'Project name',
//   description: 'An inviting pitch of about 110 characters (2-3 lines on the card).',
//   tags: ['TypeScript', 'Web'],
//   difficulty: 'Beginner',
//   repository: 'https://github.com/org/repo',
//   contributingGuide: 'https://github.com/org/repo/blob/main/CONTRIBUTING.md',
//   maintainers: [{ name: 'Jane Doe', github: 'janedoe' }],
// },
export const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Connectivity Analyser',
    description: 'Turn raw speed tests into clear insights. Build the dashboards, APIs and ML models that explain your internet.',
    tags: ['Python', 'JavaScript', 'Web', 'AI/ML'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/saurabhwagh01/smart-connectivity-analyser',
  },
  {
    id: '2',
    title: 'Civic Connect',
    description: 'Help citizens fix their cities. Report potholes and broken streetlights, then track them until they are resolved.',
    tags: ['JavaScript', 'Web'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/chhavikant03/Civic-Connect',
    maintainers: [{ name: 'chhavikant03', github: 'chhavikant03' }],
  },
  {
    id: '3',
    title: 'PromptDrift',
    description: 'Catch an LLM changing its behaviour before your users do. A Git-native toolkit for testing and monitoring prompts.',
    tags: ['Python', 'AI/ML', 'DevTools'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/tanveer-arch/promptdrift',
  },
  {
    id: '4',
    title: 'KshemOS',
    description: 'Fight online fraud with AI. Detect scams, spot fake currency and map fraud networks, all in one safety platform.',
    tags: ['Python', 'JavaScript', 'Web', 'AI/ML', 'Security'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/GoldRay19/kshemOS',
  },
  {
    id: '5',
    title: 'PixelToPieces',
    description: 'Design it, then order it. An open-source storefront for custom business cards, t-shirts, mugs and more.',
    tags: ['JavaScript', 'Web', 'DevOps'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/sabeenaviklar/pixeltopieces',
    maintainers: [{ name: 'Sabeena Viklar', github: 'sabeenaviklar' }],
  },
  {
    id: '6',
    title: 'TrustLayer AI',
    description: 'Catch AI hallucinations in real time. Check that every AI answer is grounded in your company\'s own documents.',
    tags: ['TypeScript', 'Python', 'Web', 'AI/ML', 'DevOps'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/sabeenaviklar/TrustLayer-AI',
    maintainers: [{ name: 'Sabeena Viklar', github: 'sabeenaviklar' }],
    mentors: [{ name: 'Sabeena Viklar', github: 'sabeenaviklar' }],
  },
  {
    id: '7',
    title: 'DeskBuddy',
    description: 'A study desk for students. Tasks, notes, academic planning and collaboration, organized in one place.',
    tags: ['JavaScript', 'Web'],
    difficulty: 'Beginner',
    repository: 'https://github.com/sabeenaviklar/deskBuddy',
    maintainers: [{ name: 'Sabeena Viklar', github: 'sabeenaviklar' }],
    mentors: [{ name: 'Sabeena Viklar', github: 'sabeenaviklar' }],
  },
  {
    id: '8',
    title: 'Can I Try This?',
    description: 'Practice on real problems. Explore real-world challenges in design, development, writing, data and more.',
    tags: ['TypeScript', 'Python', 'Web', 'Data'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Code-Social/canitrythis',
    maintainers: [{ name: 'Code Social', github: 'Code-Social' }],
  },
  {
    id: '9',
    title: 'FitFinder',
    description: 'Find the opportunities that fit you. Scholarships, hackathons, conferences and research programs, matched to your profile.',
    tags: ['TypeScript', 'Web'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Code-Social/fitfinder',
    maintainers: [{ name: 'Code Social', github: 'Code-Social' }],
  },
  {
    id: '10',
    title: 'LinkedIn Copilot',
    description: 'Plan, draft and schedule LinkedIn posts, and learn how you write from your own past posts.',
    tags: ['TypeScript', 'JavaScript', 'Web'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Code-Social/linkedin-copilot-main',
    maintainers: [{ name: 'Code Social', github: 'Code-Social' }],
  },
];
