"use client";
import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  repository: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'FitFinder',
    description: 'A smart and community-driven platform where you can discover global scholarships, research programs and more, all based on your profile.',
    tags: ['React', 'Node.js', 'MongoDB'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Code-Social/fitfinder'
  },
  {
    id: '2',
    title: 'Can I Try This?',
    description: 'A fun and beginner-friendly platform where you can explore real-world challenges in design, development, writing, data, and more.',
    tags: ['Vue.js', 'Firebase', 'React', 'TypeScript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Code-Social/canitrythis'
  },
  {
    id: '3',
    title: 'Gityzer',
    description: 'Gityzer is an online tool that reads your GitHub stats and generates a sleek, trendy line for your profile README to summarize and showcase your journey on GitHub.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/vansh-codes/gityzer'
  },
  {
    id: '4',
    title: 'Veltrian Hybrid AI Database',
    description: 'A fully local, cloudless AI-hybrid database that lets users upload, clean, visualize, and query data entirely in their browser — no servers, no cloud, no leaks. Designed for speed, privacy, and accessibility.',
    tags: ['React', 'Vite', 'IndexedDB', 'TensorFlow.js', 'D3.js'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/salonijoshi1980/Veltrian-Hybrid-AI-Database'
  },
  {
    id: '5',
    title: 'Air Calibre',
    description: 'Measures air pollution and assists in mitigation using indigenously developed sensors, aligning with Atmanirbhar Bharat. Aims for large-scale social and environmental impact.',
    tags: ['Python', 'Streamlit', 'Django', 'FastAPI'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Air-Calibre'
  },
  {
    id: '6',
    title: 'BYAMN Learning',
    description: 'A free online learning platform that curates YouTube courses into structured learning paths, tracks progress, provides verified certificates, and makes quality education accessible for all.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    difficulty: 'Beginner',
    repository: 'https://github.com/DYHARDx/BYAMN-Learning'
  },
  {
    id: '8',
    title: 'GuruShish',
    description: 'A web platform connecting students with qualified tuition teachers for personalized learning. It enables booking based on subject preferences while ensuring small class sizes for focused attention.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Nest.js', 'Node.js', 'PostgreSQL'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/sailaja-adapa/GuruShish'
  },
  {
    id: '9',
    title: 'GATEDNET',
    description: 'A modern MERN-based web platform to streamline communication, management, and engagement within apartment societies using geofencing, live polls, and collaborative tools.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/guptapratykshh/GATEDNET'
  },
  {
    id: '10',
    title: 'RepoChat',
    description: 'A chat app built on top of Gemini AI that lets users enter a GitHub repo URL and chat with the repository about its contents.',
    tags: ['T3 Stack', 'tRPC', 'Gemini AI'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/trishit78/RepoChat'
  }
];


const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const allTags = ['React', 'TypeScript', 'Python', 'Next.js', 'Machine Learning', 'Documentation', 'Accessibility', 'Data Science', 'Design'];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => project.tags.includes(tag));

    return matchesSearch && matchesDifficulty && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-[var(--muted)] bg-[var(--muted)]/20';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Open Source <span className="text-[var(--frost)]">Projects</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Jump into real-world coding with projects that welcome everyone, from first-time contributors to seasoned developers. Whether you want to fix a bug, add a feature, or build something entirely new, there’s a place for you here.
          </p>
          
          {/* Submit Project CTA */}
          <div className="pt-4">
            <a
              href={process.env.NEXT_PUBLIC_FORM_PROJECT || 'https://forms.gle/PT1db4BeP4kQDNrG8'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Submit a Project
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Search and Filters - Commented out for now */}
        {/* <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 panel rounded-lg focus:outline-none focus:border-[var(--frost)] transition-colors duration-200"
            />
          </div>
        </div> */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="panel p-6 rounded-lg hover:frost-glow transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </span>
              </div>

              <p className="text-[var(--muted)] mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[var(--bg)] text-[var(--frost)] text-xs rounded border border-[var(--frost)]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary inline-flex items-center justify-center gap-2"
              >
                View Repository
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div> 

        

        {/* Empty State - Commented out for now */}
        {/* {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-[var(--muted)] mb-6">
              Try adjusting your search criteria or filters to find more projects.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDifficulty('All');
                setSelectedTags([]);
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}