// types/Forum.ts
export interface ForumPost {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    votes: number;
  }
  