export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorId: string;
  instructorAvatar: string;
  thumbnail: string;
  category: string;
  categoryId: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: number;
  tag?: 'Best Seller' | 'New' | 'Trending' | 'Popular';
  curriculum: {
    title: string;
    lessons: { title: string; duration: string; isPreview: boolean }[];
  }[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Learn Figma from Basic',
    description: 'Master UI/UX design from scratch to advanced. Learn Figma, design principles, and build a stunning portfolio.',
    instructor: 'purepearl studio',
    instructorId: '1',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    category: 'Design',
    categoryId: '1',
    price: 25,
    originalPrice: 99,
    rating: 4.5,
    reviews: 1245,
    students: 8400,
    duration: '2 hours 16 mins',
    level: 'Beginner',
    lessons: 17,
    tag: 'Best Seller',
    curriculum: [
      {
        title: 'Introduction to UI/UX',
        lessons: [
          { title: 'What is UI/UX Design?', duration: '5:30', isPreview: true },
          { title: 'Design Thinking Process', duration: '12:00', isPreview: true },
          { title: 'Tools Overview', duration: '8:45', isPreview: false },
        ],
      },
      {
        title: 'Figma Fundamentals',
        lessons: [
          { title: 'Getting Started with Figma', duration: '15:20', isPreview: false },
          { title: 'Components & Variants', duration: '22:10', isPreview: false },
          { title: 'Auto Layout Mastery', duration: '18:50', isPreview: false },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Build Digital Asset',
    description: 'Build production-ready apps with React 18, TypeScript, and modern tooling. From basics to advanced patterns.',
    instructor: 'purepearl studio',
    instructorId: '2',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
    category: 'Development',
    categoryId: '2',
    price: 25,
    originalPrice: 149,
    rating: 4.5,
    reviews: 2130,
    students: 12600,
    duration: '2 hours 16 mins',
    level: 'Beginner',
    lessons: 17,
    tag: 'Trending',
    curriculum: [
      {
        title: 'React Fundamentals',
        lessons: [
          { title: 'React Basics & JSX', duration: '10:00', isPreview: true },
          { title: 'State & Props', duration: '15:30', isPreview: false },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'the Power of Big Data',
    description: 'Master ML algorithms, deep learning, and data science with hands-on projects and real-world datasets.',
    instructor: 'purepearl studio',
    instructorId: '3',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
    category: 'Data Science',
    categoryId: '7',
    price: 25,
    originalPrice: 179,
    rating: 4.5,
    reviews: 987,
    students: 5400,
    duration: '2 hours 16 mins',
    level: 'Beginner',
    lessons: 17,
    tag: 'Popular',
    curriculum: [],
  },
  {
    id: '4',
    title: 'Balancing Productivity an...',
    description: 'Grow any business online with proven digital marketing strategies, SEO, paid ads, and social media.',
    instructor: 'purepearl studio',
    instructorId: '4',
    instructorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    category: 'Marketing',
    categoryId: '3',
    price: 25,
    originalPrice: 89,
    rating: 4.5,
    reviews: 1560,
    students: 9800,
    duration: '2 hours 16 mins',
    level: 'Beginner',
    lessons: 17,
    tag: 'Best Seller',
    curriculum: [],
  },
  {
    id: '5',
    title: 'Mastering Money Manage...',
    description: 'Learn photography from the very basics to advanced techniques. Covers DSLR, mirrorless, and mobile photography.',
    instructor: 'purepearl studio',
    instructorId: '1',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    category: 'Photography',
    categoryId: '4',
    price: 25,
    originalPrice: 79,
    rating: 4.5,
    reviews: 823,
    students: 4200,
    duration: '2 hours 16 mins',
    level: 'Beginner',
    lessons: 17,
    tag: 'New',
    curriculum: [],
  },
  {
    id: '6',
    title: 'From Idea to Startup Succ...',
    description: 'Develop essential business skills, from idea validation and financial planning to scaling your startup.',
    instructor: 'purepearl studio',
    instructorId: '4',
    instructorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    category: 'Business',
    categoryId: '6',
    price: 25,
    originalPrice: 129,
    rating: 4.5,
    reviews: 1102,
    students: 7200,
    duration: '2 hours 16 mins',
    level: 'Beginner',
    lessons: 17,
    curriculum: [],
  },
];
