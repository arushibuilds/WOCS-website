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
    title: 'History of all flight crash',
    description: 'A data-driven web app that visualizes global aircraft crash data on an interactive map using Python and Streamlit. It allows users to explore aviation accidents by year, region, aircraft type, and cause, providing valuable insights into safety trends.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/vinaysingh282006/History-of-all-flight-crash-map'
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
  },
  {
    id: '11',
    title: 'Disease prediction',
    description: 'A project that applies Bayes\' Theorem to estimate the percentage chance of survival from a disease using historical hospital data. Designed to help understand real-world applications of Bayesian probability in medical diagnosis and survival prediction.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/aliviahossain/Disease-prediction'
  },
  {
    id: '12',
    title: 'SaralSeva',
    description: 'SaralSeva is a 3-tier digital governance platform which enables 24/7 access to government services, tracks applications with unique IDs, automates workflows, manages schemes, and ensures grievance redressal for citizens, employees, and admins.',
    tags: ['ReactJS', 'Tailwind CSS', 'Vite', 'NodeJS', 'ExpressJS', 'MongoDB'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/eccentriccoder01/SaralSeva'
  },
  {
    id: '13',
    title: 'Happy trails',
    description: 'A collaborative platform for creating, sharing, and improving open source project documentation. Aims to enhance the quality and accessibility of documentation for developers and users alike.',
    tags: ['Flask', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Kavlin-Kaur/Happy-Trails'
  },
  {
    id: '14',
    title: 'car-transport-service',
    description: 'Beginner-friendly Car Transport Service. Open for contributions to improve design, features, and functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Nikhilrsingh/car-transport-service'
  },
  {
    id: '15',
    title: 'ClinIQ',
    description: 'ClinIQ is an AI-powered health-tech platform designed to make healthcare more accessible and intelligent. It provides users with instant, personalized symptom analysis using AI, helps them discover verified doctors, and enables seamless appointment booking — all in one place. Built with React, TypeScript, Supabase, and the Gemini API, ClinIQ offers an interactive chat interface, hospital locator, and a responsive user experience. The platform empowers users to make informed health decisions with ease, bridging the gap between patients and healthcare professionals through technology and innovation.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Gemini API'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/akshay0611/ClinIQ'
  },
  {
    id: '16',
    title: 'Peacebot-AI',
    description: 'PeaceBot AI is an intelligent and empathetic mental health chatbot designed to provide emotional support, motivational messages, and mindfulness guidance.',
    tags: ['Python', 'Flask', 'OpenAI API', 'JavaScript', 'HTML', 'CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Tanyasharma71/peacebot-ai'
  },
  {
    id: '17',
    title: 'CarbonX',
    description: 'CarbonX is an advance web3 and Blockchain based Carbon Trading platform which have the ability to buy, retire and offset the carbons credits. CarbonX have AI with the ability to calculate the Carbon Footprints and total number of Carbon Credits required in one Unified Platform, providing the ability to do multiple things which helps in save time.',
    tags: ['Next.Js', 'Typescript', 'Tailwind Css', 'Blockchain (Eth or polygon, Solitary)', 'AI/ML'],
    difficulty: 'Advanced',
    repository: 'https://github.com/AkshitTiwarii/carbonx'
  },
  {
    id: '18', 
    title: 'Collegedaddy',
    description: 'College Daddy is a lightweight academic toolkit built with HTML, CSS, and JavaScript. It helps students calculate CGPA and internal marks, access semester-wise notes, and stay organized during exams  all within a simple, responsive interface. Originally developed during end-semester exams to solve real student problems, College Daddy aims to make academic management effortless and accessible for every student.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/mugenkyou/College_daddy'
  },
  {
    id: '19',
    title: 'Blood-donation',
    description: 'The Blood Donation Website is a web-based platform designed to connect blood donors with recipients and blood banks efficiently. The system simplifies the process of finding donors, scheduling donations, and managing blood inventory in emergencies.',
    tags: ['javascript', 'typescript', 'html', 'css'],
    difficulty: 'Beginner',
    repository: 'https://github.com/darshan-totagi/blood-donation'
  },
  {
    id: '20',
    title: 'Verdigo Eco friendly Project',
    description: 'VerdiGo is a comprehensive environmental impact platform that empowers users to track, reduce, and offset their carbon footprint while promoting sustainable living practices.',
    tags: ['React','Leaflet', 'Tailwind CSS', 'Node.js'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Meghali54/Verdigo_Eco-friendly_Project'
  },
  {
    id: '21',
    title: 'Foodie',
    description: 'Fully Responsive Food Delivery App A sleek, mobile-first food delivery platform built with modern web technologies to ensure seamless user experience across all devices. Designed with accessibility, performance, and scalability in mind, this app empowers users to browse menus, customize orders, and track deliveries with ease',
    tags: ['JavaScript', 'HTML', 'CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/janavipandole/Hacktoberfest2025-Foodie'
  },
  {
    id: '22',
    title: 'Roommate',
    description: 'A shared living space for Roommates out there. Split expenses, track chores and much more.',
    tags: ['React', 'Typescript', 'Node', 'Postgres', 'Prisma'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/souravseal99/RoomMate'
  },
  {
    id: '23',
    title: 'Thread Hopper',
    description: 'AI-powered web app that transforms long-form content (blog posts, newsletters, scripts) into platform-specific social media posts',
    tags: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Supabase', 'OpenAI API'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/rishaan007/thread-hopper-js'
  },
  {
    id: '24',
    title: 'Foodogram',
    description: 'Foodogram is a full-featured online food ordering platform that allows users to browse restaurants, view menus, add items to the cart, and place orders seamlessly.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Node.js', 'MySQL', 'Git', 'GitHub'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Mrigakshi-Rathore/Foodogram'
  },
  {
    id: '25',
    title: 'Celtrix',
    description: 'An open-source scaffolding tool that helps you set up full-stack projects instantly with one command',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/celtrix-os/Celtrix'
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