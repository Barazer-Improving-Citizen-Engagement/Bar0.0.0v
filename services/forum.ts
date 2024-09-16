// services/forum.ts
import { ForumPost } from '../types/Forum';

let forumPosts: ForumPost[] = [
  { id: '1', title: 'Discuss Bill A', content: 'Content about Bill A...', author: 'John Doe', createdAt: new Date(), votes: 20 },
  { id: '2', title: 'Service Delivery Issues', content: 'Content about poor services...', author: 'Jane Doe', createdAt: new Date(), votes: 15 },
];

export function getForumPosts(): ForumPost[] {
  return forumPosts;
}

export function voteOnPost(postId: string, upvote: boolean) {
  const post = forumPosts.find(p => p.id === postId);
  if (post) post.votes += upvote ? 1 : -1;
}
