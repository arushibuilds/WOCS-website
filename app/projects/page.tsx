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
              href={process.env.NEXT_PUBLIC_FORM_PROJECT || 'https://forms.gle/28NPGQ65L6JJp7Du8'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Submit a Project
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="flex flex-col items-center justify-center py-24">
          <div className="text-center space-y-6">
            <div className="text-7xl mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projects Coming <span className="text-[var(--frost)]">Soon</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              We're curating an exciting lineup of new projects for WOCS 2026. 
              Projects will go live on <strong>November 1st, 2026</strong>. 
              Stay tuned for amazing opportunities to contribute!
            </p>
            <div className="pt-4">
              <p className="text-lg text-[var(--frost)] font-semibold">📅 Launching November 1, 2026</p>
            </div>
          </div>
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