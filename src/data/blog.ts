export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  category: string;
  thumbnail: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Design Trends to Watch in 2024',
    excerpt: 'Explore the top UI/UX design trends shaping the digital landscape this year, from glassmorphism to AI-generated art.',
    content: '',
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&q=80',
    category: 'Design',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    date: 'Dec 12, 2023',
    readTime: '6 min read',
  },
  {
    id: '2',
    title: 'How to Land Your First Tech Job in 2024',
    excerpt: 'A complete roadmap for breaking into tech: which skills to learn, how to build a portfolio, and how to ace interviews.',
    content: '',
    author: 'Marcus Williams',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    category: 'Career',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    date: 'Dec 8, 2023',
    readTime: '9 min read',
  },
  {
    id: '3',
    title: 'The Rise of AI in Online Education',
    excerpt: 'How artificial intelligence is transforming e-learning: personalized paths, automated grading, and smart tutoring.',
    content: '',
    author: 'Elena Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    category: 'Technology',
    thumbnail: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    date: 'Nov 30, 2023',
    readTime: '7 min read',
  },
];
