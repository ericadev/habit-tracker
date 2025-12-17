// Habit categories
export type Category =
  | 'Health'
  | 'Fitness'
  | 'Productivity'
  | 'Learning'
  | 'Mindfulness'
  | 'Social'
  | 'Other';

// Main habit interface
export interface Habit {
  id: string;
  name: string;
  description: string;
  category: Category;
  color: string;
  createdAt: string; // ISO date string
  archivedAt?: string; // ISO date string
}

// Habit completion log
export interface HabitLog {
  id: string;
  habitId: string;
  completedDate: string; // ISO date string (YYYY-MM-DD)
  notes?: string;
  createdAt: string; // ISO date string
}

// Habit statistics
export interface HabitStats {
  habitId: string;
  currentStreak: number;
  longestStreak: number;
  totalCompletions: number;
  completionRate7Days: number; // 0-100
  completionRate30Days: number; // 0-100
  completionRate90Days: number; // 0-100
}

// Category color mapping
export const CATEGORY_COLORS: Record<Category, string> = {
  Health: 'green',
  Fitness: 'blue',
  Productivity: 'purple',
  Learning: 'yellow',
  Mindfulness: 'pink',
  Social: 'indigo',
  Other: 'gray',
};

// Category color class mapping for Tailwind
export const CATEGORY_COLOR_CLASSES: Record<Category, { bg: string; text: string; border: string }> = {
  Health: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    border: 'border-green-500'
  },
  Fitness: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-500'
  },
  Productivity: {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    border: 'border-purple-500'
  },
  Learning: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    border: 'border-yellow-500'
  },
  Mindfulness: {
    bg: 'bg-pink-100',
    text: 'text-pink-700',
    border: 'border-pink-500'
  },
  Social: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-700',
    border: 'border-indigo-500'
  },
  Other: {
    bg: 'bg-gray-100',
    text: 'text-gray-700',
    border: 'border-gray-500'
  },
};
