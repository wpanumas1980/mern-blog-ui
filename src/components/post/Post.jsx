import React from 'react';
import './post.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Post({post}) {
  console.log('post =>', post);
  return (
    <div className="post">
      <img
        src={`${BASE_URL}${post.image.url}`}
        alt=""
        className="postImage"
      />
      <div className="postInfo">
        {/* <div className="postCats">
          <span className="postCat">
            Music
          </span>
          <span className="postCat">
            Life
          </span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet dolore.
        </span> */}
        <hr />
        <span className="postDate">
          {new Date(post.created_at).toDateString()}
        </span>
      </div>
      <div className="postDesc">
       {post.description}
      </div>
      <div>
        <i className="far fa-thumbs-up" />
        <span style={{marginLeft:5}}>{post.likes}</span>
      </div>
    </div>
  )
}
