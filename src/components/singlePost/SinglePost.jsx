import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './singlePost.css';
import { Link } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function SinglePost() {

  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  // console.log(params);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${BASE_URL}/posts/${postId}`);
      setPost(res.data);
      setLoading(false)
    }
    getPost();
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>
  }
  // console.log(post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={`${BASE_URL}${post.image.formats.medium.url}`}
          alt=""
          className="singlePostImg"
        />
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
            <Link to={`/?author.username=${post.author.username}`} className="link">
              <b className="singlePostAuthor">
                {post.author.username}
              </b>
            </Link>
          </span>
          <span>{new Date(post.created_at).toLocaleString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.description}
        </p>
      </div>
    </div>
  )
}
