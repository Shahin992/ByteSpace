export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
  bio: string;
  skills: string[];
}

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&q=80',
    rating: 4.9,
    students: 12400,
    courses: 8,
    bio: 'Passionate designer with 10+ years of experience creating beautiful digital products.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
  },
  {
    id: '2',
    name: 'Marcus Williams',
    title: 'Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 4.8,
    students: 18200,
    courses: 12,
    bio: 'Building scalable web applications for over 8 years with a focus on React and Node.js.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    id: '3',
    name: 'Elena Chen',
    title: 'Data Science Expert',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 4.9,
    students: 9800,
    courses: 6,
    bio: 'PhD in Computer Science with a specialization in machine learning and data analytics.',
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Visualization'],
  },
  {
    id: '4',
    name: 'David Park',
    title: 'Digital Marketing Strategist',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    rating: 4.7,
    students: 15600,
    courses: 9,
    bio: 'Helping businesses grow with data-driven marketing strategies since 2012.',
    skills: ['SEO', 'Content Marketing', 'Social Media', 'Google Ads'],
  },
];
