export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
  bgColor: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Design', icon: '🎨', count: 125, color: '#FF6B6B', bgColor: '#FFF0F0' },
  { id: '2', name: 'Development', icon: '💻', count: 340, color: '#1919FC', bgColor: '#F0F0FF' },
  { id: '3', name: 'Marketing', icon: '📢', count: 98, color: '#F59E0B', bgColor: '#FFFBEB' },
  { id: '4', name: 'Photography', icon: '📷', count: 64, color: '#8B5CF6', bgColor: '#F5F3FF' },
  { id: '5', name: 'Music', icon: '🎵', count: 82, color: '#EC4899', bgColor: '#FDF2F8' },
  { id: '6', name: 'Business', icon: '📊', count: 156, color: '#10B981', bgColor: '#ECFDF5' },
  { id: '7', name: 'Data Science', icon: '🔬', count: 89, color: '#06B6D4', bgColor: '#ECFEFF' },
  { id: '8', name: 'Animation', icon: '🎬', count: 47, color: '#F97316', bgColor: '#FFF7ED' },
];
