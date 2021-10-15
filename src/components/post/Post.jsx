import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Post({ post }) {
  // console.log('post =>', post);
  return (
    <div className="post">
      {post.image && <img
        src={`${BASE_URL}${post.image.url}`}
        alt=""
        className="postImage"
      />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(cat =>
            <span key={cat.id} className="postCat">
              {cat.name}
            </span>
          )}
        </div>
        <Link to={`/post/${post.id}`} className="link">
          <span className="postTitle">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.created_at).toDateString()}
        </span>
      </div>
      <div className="postDesc">
        {post.description}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <i className="far fa-thumbs-up" />
          <span style={{ marginLeft: 5 }}>{post.likes}</span>
        </div>
        <p>Author:
          {post.author?
          <Link to={`/?author.username=${post.author.username}`} className="link">
            <span>
              {post.author.username}
            </span>
          </Link>
          :
          "-"
          }
        </p>
      </div>
    </div>
  )
}
