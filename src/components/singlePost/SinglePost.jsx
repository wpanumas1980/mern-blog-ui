import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './singlePost.css';

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
    }
    getPost();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo &&
          <img
            src={post.photo}
            alt=""
            className="singlePostImg"
          />
        }
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singlePostAuthor">
                {post.username}
              </b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )
}
