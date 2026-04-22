import React from 'react';
import posts from '../data/posts.json';
import PostCard from '../components/PostCard';

export default function FeedPage() {
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}