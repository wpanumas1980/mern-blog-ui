import React from 'react';
import Post from '../post/Post';
import './posts.css';

export default function Posts({posts}) {
  // console.log(posts);
  return (
    <div className="posts">
      {posts.map( (post,idx) => <Post key={idx} post={post}/>)}
    </div>
  )
}
