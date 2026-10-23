export interface Project {
  id: string;
  title: string;
  description: string;
  /** Languages, frameworks and tools. Used for the tech-stack filter. */
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
//   description: 'One or two sentences on what the project does and what help it needs.',
//   tags: ['TypeScript', 'React'],
//   difficulty: 'Beginner',
//   repository: 'https://github.com/org/repo',
//   contributingGuide: 'https://github.com/org/repo/blob/main/CONTRIBUTING.md',
//   maintainers: [{ name: 'Jane Doe', github: 'janedoe' }],
// },
export const projects: Project[] = [];
