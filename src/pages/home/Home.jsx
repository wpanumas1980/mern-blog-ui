import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { useLocation } from 'react-router';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Home() {

  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  // console.log(search);
  useEffect(() => {
    const fetchPost = async () => {
      // const res = await axios.get(`${BASE_URL}/posts`);
      const res = await axios.get(`${BASE_URL}/posts${search}`);
      setPosts(res.data);
    }
    fetchPost();
  }, [search]);

  // console.log(posts);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
        {/* <Sidebar/> */}
      </div>
    </>
  )
}
