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
    description: 'A data-driven web app that visualizes global aircraft crash data on an interactive map using Python and Streamlit.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/vinaysingh282006/History-of-all-flight-crash-map'
  },
  {
    id: '6',
    title: 'BYAMN Learning',
    description: 'A free online learning platform that curates YouTube courses into structured learning paths.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    difficulty: 'Beginner',
    repository: 'https://github.com/DYHARDx/BYAMN-Learning'
  },
  {
    id: '7',
    title: 'SaralSeva',
    description: 'SaralSeva is a 3-tier digital governance platform with automated workflows and grievance redressal.',
    tags: ['ReactJS', 'Tailwind CSS', 'Vite', 'NodeJS', 'ExpressJS', 'MongoDB'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/eccentriccoder01/SaralSeva'
  },
  {
    id: '8',
    title: 'Happy trails',
    description: 'A collaborative platform for creating and improving open source documentation.',
    tags: ['Flask', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Kavlin-Kaur/Happy-Trails'
  },
  {
    id: '9',
    title: 'car-transport-service',
    description: 'Beginner-friendly Car Transport Service. Open for improvements.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Nikhilrsingh/car-transport-service'
  },
  {
    id: '10',
    title: 'Peacebot-AI',
    description: 'An empathetic mental health chatbot for emotional support and mindfulness guidance.',
    tags: ['Python', 'Flask', 'OpenAI API', 'JavaScript', 'HTML', 'CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Tanyasharma71/peacebot-ai'
  },
  {
    id: '11',
    title: 'CarbonX',
    description: 'A web3-based carbon trading platform with AI-powered footprint calculations.',
    tags: ['Next.Js', 'Typescript', 'Tailwind Css', 'Blockchain', 'AI/ML'],
    difficulty: 'Advanced',
    repository: 'https://github.com/AkshitTiwarii/carbonx'
  },
  {
    id: '12',
    title: 'Collegedaddy',
    description: 'A lightweight academic toolkit helping students calculate CGPA, access notes, and stay organized.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/mugenkyou/College_daddy'
  },
  {
    id: '13',
    title: 'Foodie',
    description: 'Fully responsive food delivery app with mobile-first design.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/janavipandole/Hacktoberfest2025-Foodie'
  },
  {
    id: '14',
    title: 'Roommate',
    description: 'A shared living management platform for splitting expenses and tracking chores.',
    tags: ['React', 'Typescript', 'Node', 'Postgres', 'Prisma'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/souravseal99/RoomMate'
  },
  {
    id: '15',
    title: 'Thread Hopper',
    description: 'AI-powered tool that transforms long content into platform-specific social posts.',
    tags: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'OpenAI API'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/rishaan007/thread-hopper-js'
  },
  {
    id: '16',
    title: 'Foodogram',
    description: 'Full-featured online food ordering platform.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Node.js', 'MySQL'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Mrigakshi-Rathore/Foodogram'
  },
  {
    id: '17',
    title: 'AI_TASK_MANAGER',
    description: 'AI-driven platform that classifies, prioritizes, and assigns tasks using NLP and ML.',
    tags: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'Seaborn'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/ABHIJEET-0001/AI_TASK_MANAGER_2.8'
  },
  {
    id: '18',
    title: 'DevElevate',
    description: 'AI-powered mentorship, task management, and career recommendations.',
    tags: ['Typescript', 'Tailwind CSS', 'Shadcn UI', 'Axios'],
    difficulty: 'Advanced',
    repository: 'https://github.com/abhisek2004/Dev-Elevate'
  },
  {
    id: '19',
    title: 'WordWizard',
    description: 'A modern text manipulation tool with rich analysis features.',
    tags: ['React.js', 'Vite', 'Tailwind CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/palchhinparihar/WordWizard'
  },
  {
    id: '20',
    title: 'Recodehive (Recode Website)',
    description: 'Helps learners master data skills and contribute to open source.',
    tags: ['nextjs', 'css', 'html', 'typescript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/recodehive/recode-website'
  },
  {
    id: '21',
    title: 'FoodSaver-AnnyoMitrro',
    description: 'A React app connecting restaurants with NGOs to reduce food waste.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Spring Boot'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/bidyut26maji/FoodSaver'
  },
  {
    id: '22',
    title: 'AlgoFi',
    description: 'A decentralized NFT marketplace on the Algorand testnet.',
    tags: ['Javascript', 'Python', 'Html', 'CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/denshaw-09/AlgoFi'
  },
  {
    id: '23',
    title: 'GameHub',
    description: 'A futuristic browser gaming platform with glass morphism UI.',
    tags: ['Html', 'CSS', 'Javascript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/kaifansariw/GameHub'
  },
  {
    id: '24',
    title: 'RentOrbits',
    description: 'A modern, responsive car rental website.',
    tags: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Diksha78-bot/RentOrbits'
  },
  {
    id: '25',
    title: 'LearnX',
    description: 'Get an AI-generated structured learning path based on any topic.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    difficulty: 'Beginner',
    repository: 'https://github.com/tilakjain619/LearnX'
  },
  {
    id: '26',
    title: 'Intelligent Job Recommendation System',
    description: 'AI-powered platform delivering personalized job recommendations.',
    tags: ['Python', 'Flask', 'MongoDB', 'PostgreSQL', 'Node.js', 'React'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/nitinc264/CredX-AI'
  },
  {
    id: '27',
    title: 'TourEase',
    description: 'AI-powered travel assistant with planning, safety data, and community insights.',
    tags: ['React.js', 'Node.js', 'Firebase Auth', 'JWT', 'MongoDB'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Suhani1234-5/TourEase'
  },
  {
    id: '28',
    title: 'LearnSpace',
    description: 'Collaborative education platform with kanban board and library.',
    tags: ['MERN', 'JWT Authentication', 'Socket.io'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/HimanshiSh03/Full-stack01'
  },
  {
    id: '29',
    title: 'Smart-Resume-Reviewer',
    description: 'Streamlit app that analyzes resumes and provides feedback.',
    tags: ['Python', 'Streamlit', 'HTML', 'CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/SharanyaAchanta/Smart-Resume-Reviewer'
  },
  {
    id: '30',
    title: 'EduMind – AI Study Assistant',
    description: 'Web platform with notes, tasks, timer, whiteboard, and AI study suggestions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase', 'Cloudinary', 'Gemini API'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/dimpal-yadav/EduMind-AI-Study-Assistant'
  },
  {
    id: '31',
    title: 'Pixel Phantoms',
    description: 'Tech club learning platform with modules, tasks, leaderboard, and admin tools.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    difficulty: 'Beginner',
    repository: 'https://github.com/sayeeg-11/Pixel_Phantoms'
  },
  {
    id: '32',
    title: 'LocalMind',
    description: 'Self-hosted AI platform with full offline capabilities.',
    tags: ['React', 'Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'Socket.io'],
    difficulty: 'Beginner',
    repository: 'https://github.com/NexGenStudioDev/LocalMind'
  },
  {
    id: '33',
    title: 'AssignMe',
    description: 'AssignMe is an open source web application that helps students complete their assignments by converting digital text into customizable handwritten-style documents.',
    tags: ['Html', 'Python', 'CSS', 'JavaScript', 'Docker'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Rajan167030/asignme'
  }
  ,
  {
    id: '34',
    title: 'EDUPAGE +',
    description: 'EDUPAGE consolidates CSVs into a single DataFrame for analysis.',
    tags: ['Python', 'Dash', 'Flask', 'Plotly', 'Pandas', 'NumPy', 'CSV'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/abhishekkumar177/EDUPAGE'
  },
  {
    id: '35',
    title: 'VMusic',
    description: 'Music streaming app with indie tracks and Spotify previews.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Firestore', 'Vercel', 'Jamendo API', 'Spotify API'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/mr-baraiya/VMusic'
  },
  {
    id: '36',
    title: 'Face-Based-Attendance-Attribute-System',
    description: 'Python-based Face Recognition Attendance System with Age, Gender, and Emotion Detection using OpenCV and Deep Learning.',
    tags: ['OpenCV', 'NumPy', 'TensorFlow', 'Keras', 'dlib', 'face-recognition', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Python'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/AnshulSharma9340/Face-Based-Attendance-Attribute-System'
  },
  {
    id: '37',
    title: 'Event Manager',
    description: 'Full-stack Event Management System with MERN stack for browsing events, making bookings, and managing user profiles.',
    tags: ['Express', 'React', 'Node.js', 'MongoDB'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Deven14125/Event_Manager'
  },
  {
    id: '38',
    title: 'Magnamite-OTT',
    description: 'Cinematic, responsive OTT streaming platform with a dark theme and smooth navigation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/DivaQueen-dev/Magnamite_Ott'
  },
  {
    id: '39',
    title: 'Jan Suraksha',
    description: 'Full-stack digital safety platform with auth, admin dashboard, and automated CI/CD to modernize FIR processes.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    difficulty: 'Beginner',
    repository: 'https://github.com/Anjalijagta/jan_suraksha'
  },
  {
    id: '40',
    title: 'Smart Expiry Guardian – AI Food Expiry Tracker',
    description: 'AI-powered expiry-tracking system with barcode/OCR intake, reminders, storage awareness, and health-risk alerts.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'OCR', 'Barcode'],
    difficulty: 'Advanced',
    repository: 'https://github.com/Muskan121622/expiry-shine-dash'
  },
  {
    id: '41',
    title: 'QueerConnect SA',
    description: 'Community platform supporting LGBTQ+ connections, resources, and safe-space engagement across South Asia.',
    tags: ['React', 'Firebase', 'Firestore', 'JavaScript', 'HTML', 'CSS'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/wellnut24/queerconnect-sa'
  },
  {
    id: '42',
    title: 'Innovision: Adaptive Learning Interface',
    description: 'InnoVision is an AI-powered adaptive learning platform that dynamically generates personalized courses from any topic. It features interactive chapters, gamified tasks, OAuth authentication, XP-based progression, and real-time progress tracking with a journey map visualization.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Firebase', 'Auth.js', 'Gemini API', 'EmailJS', 'Lucide Icons', 'OAuth'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/ItsVikasA/Innovision7'
  },
  {
    id: '43',
    title: 'CryptoHub',
    description: 'A modern crypto tracking platform to explore real-time prices, view coin analytics, and stay updated with market trends in an intuitive interface.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Vite'],
    difficulty: 'Beginner',
    repository: 'https://github.com/KaranUnique/CryptoHub'
  },
  {
    id: '44',
    title: 'Smart Campus App – A Modern Campus Management & Student Utility Platform',
    description: 'Open-source MERN-based platform with notes sharing, attendance tracking, canteen ordering, lost-and-found, SOS alerts, and an interactive campus map. Built with modular architecture ideal for open-source collaboration.',
    tags: ['React', 'Tailwind CSS', 'Bootstrap', 'TypeScript', 'Next.js', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'JWT', 'Cookies', 'Leaflet', 'OpenStreetMap', 'Web Push', 'Gemini API'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/Shubham-cyber-prog/Smart-Campus'
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