
import { Category, Thread, Comment, User } from '../types/forum';

export const users: User[] = [
  {
    id: "user1",
    username: "pixel_dreamer",
    avatar: "https://i.pravatar.cc/150?img=32",
    joinedDate: "2023-01-15",
    postCount: 253
  },
  {
    id: "user2",
    username: "retro_vibes",
    avatar: "https://i.pravatar.cc/150?img=44",
    joinedDate: "2023-02-20",
    postCount: 187
  },
  {
    id: "user3",
    username: "y2k_aesthetic",
    avatar: "https://i.pravatar.cc/150?img=47",
    joinedDate: "2023-03-10",
    postCount: 121
  },
  {
    id: "user4",
    username: "digital_nomad",
    avatar: "https://i.pravatar.cc/150?img=13",
    joinedDate: "2023-01-05",
    postCount: 324
  },
  {
    id: "user5",
    username: "web1_enjoyer",
    avatar: "https://i.pravatar.cc/150?img=50",
    joinedDate: "2023-04-18",
    postCount: 89
  }
];

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Retro Tech",
    description: "Discuss vintage computing, old-school gadgets and retro hardware",
    icon: "cpu",
    threadCount: 124,
    lastActivity: "2025-04-12T10:32:00Z"
  },
  {
    id: "cat2",
    name: "Web 1.0 Nostalgia",
    description: "Remembering the early internet, Geocities and the classic web",
    icon: "globe",
    threadCount: 87,
    lastActivity: "2025-04-13T14:20:00Z"
  },
  {
    id: "cat3",
    name: "Pixel Art",
    description: "Share and discuss pixel art, techniques and inspiration",
    icon: "square",
    threadCount: 203,
    lastActivity: "2025-04-13T18:45:00Z"
  },
  {
    id: "cat4",
    name: "Y2K Culture",
    description: "All things Y2K, from fashion to media to technology",
    icon: "sparkles",
    threadCount: 156,
    lastActivity: "2025-04-14T09:15:00Z"
  },
  {
    id: "cat5",
    name: "Digital Minimalism",
    description: "Discuss minimalist approaches to digital life and design",
    icon: "minus-square",
    threadCount: 92,
    lastActivity: "2025-04-12T22:10:00Z"
  }
];

export const threads: Thread[] = [
  {
    id: "thread1",
    title: "What's your favorite vintage computing platform?",
    content: "I've been collecting retro computers and I'm curious what platforms people are into. Commodore 64? Apple II? Early Macs? MS-DOS machines? Share your faves and why you love them!",
    categoryId: "cat1",
    author: users[0],
    createdAt: "2025-04-10T15:23:00Z",
    upvotes: 24,
    commentCount: 15,
    views: 132,
    isSticky: true
  },
  {
    id: "thread2",
    title: "Miss the days of Geocities and personal homepages",
    content: "Anyone else missing the personal touch of old Geocities sites? Each one was unique and reflected the creator's personality. Today's social media feels too templated in comparison.",
    categoryId: "cat2",
    author: users[1],
    createdAt: "2025-04-11T10:15:00Z",
    upvotes: 42,
    commentCount: 23,
    views: 210
  },
  {
    id: "thread3",
    title: "Beginner pixel art resources?",
    content: "Just starting with pixel art and looking for good tutorials and tools. What do you recommend for absolute beginners?",
    categoryId: "cat3",
    author: users[2],
    createdAt: "2025-04-12T09:45:00Z",
    upvotes: 18,
    commentCount: 12,
    views: 156
  },
  {
    id: "thread4",
    title: "Y2K aesthetic in modern designs",
    content: "I've noticed Y2K aesthetics making a huge comeback in design. What elements do you think define this style and how is it being reinterpreted today?",
    categoryId: "cat4",
    author: users[3],
    createdAt: "2025-04-13T14:30:00Z",
    upvotes: 37,
    commentCount: 19,
    views: 185
  },
  {
    id: "thread5",
    title: "Digital decluttering strategies",
    content: "I'm trying to minimize my digital footprint and declutter my online life. What strategies have worked for you in simplifying your digital presence?",
    categoryId: "cat5",
    author: users[4],
    createdAt: "2025-04-11T16:20:00Z",
    upvotes: 29,
    commentCount: 14,
    views: 142
  },
  {
    id: "thread6",
    title: "Building a retro gaming PC - parts recommendations?",
    content: "I want to build a PC specifically for running DOS and Windows 95/98 games authentically. What hardware would you recommend that balances authenticity with reliability?",
    categoryId: "cat1",
    author: users[2],
    createdAt: "2025-04-09T11:10:00Z",
    upvotes: 15,
    commentCount: 10,
    views: 98
  }
];

export const comments: Comment[] = [
  {
    id: "comment1",
    threadId: "thread1",
    content: "Commodore 64 all the way! My first computer and still love that SID chip sound.",
    author: users[1],
    createdAt: "2025-04-10T16:30:00Z",
    upvotes: 8
  },
  {
    id: "comment2",
    threadId: "thread1",
    content: "Apple II was my introduction to computing. Those green monochrome games were so atmospheric!",
    author: users[3],
    createdAt: "2025-04-10T17:45:00Z",
    upvotes: 6
  },
  {
    id: "comment3",
    threadId: "thread1",
    content: "MS-DOS gaming era was peak gaming for me. So many classics from that period that still hold up.",
    author: users[2],
    createdAt: "2025-04-10T18:20:00Z",
    upvotes: 10
  },
  {
    id: "comment4",
    threadId: "thread2",
    content: "I miss how creative people got with those limited tools. The under construction GIFs, visitor counters, and guest books!",
    author: users[0],
    createdAt: "2025-04-11T11:05:00Z",
    upvotes: 15
  },
  {
    id: "comment5",
    threadId: "thread2",
    content: "Check out Neocities if you haven't already - it's trying to bring back that personal homepage feel.",
    author: users[4],
    createdAt: "2025-04-11T12:30:00Z",
    upvotes: 12
  }
];

// Helper function to get threads by category
export const getThreadsByCategory = (categoryId: string): Thread[] => {
  return threads.filter(thread => thread.categoryId === categoryId);
};

// Helper function to get comments by thread
export const getCommentsByThread = (threadId: string): Comment[] => {
  return comments.filter(comment => comment.threadId === threadId);
};

// Helper function to get a category by ID
export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId);
};

// Helper function to get a thread by ID
export const getThreadById = (threadId: string): Thread | undefined => {
  return threads.find(thread => thread.id === threadId);
};
