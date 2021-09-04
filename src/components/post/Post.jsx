import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

export default function Post({ post }) {
 
  return (
    <div className="post">
      {post.photo &&
        <img
          src={`${process.env.REACT_APP_BASE_URL}/images/${post.photo}`}
          alt=""
          className="postImage"
        />

      }
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, idx) =>
            <span className="postCat" key={idx}>
              {c}
            </span>
          )}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className="postDesc">
        {post.desc}
      </div>
    </div>
  )
}
