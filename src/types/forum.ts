
export interface User {
  id: string;
  username: string;
  avatar?: string;
  joinedDate: string;
  postCount: number;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    instagram?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  threadCount: number;
  lastActivity?: string;
}

export interface Thread {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  author: User;
  createdAt: string;
  upvotes: number;
  commentCount: number;
  views: number;
  isSticky?: boolean;
  isLocked?: boolean;
}

export interface Comment {
  id: string;
  threadId: string;
  content: string;
  author: User;
  createdAt: string;
  upvotes: number;
  isEdited?: boolean;
}
