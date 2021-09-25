import React, { useState,useEffect } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Home() {

  const [posts , setPosts] =useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${BASE_URL}/posts`);
      setPosts(res.data);
    }
    fetchPost();
  },[]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
        {/* <Sidebar/> */}
      </div>
    </>
  )
}
