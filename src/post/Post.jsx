import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="postImage"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            Music
          </span>
          <span className="postCat">
            Life
          </span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet dolore.
        </span>
        <hr />
        <span className="postDate">
          1 hour ago
        </span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aut beatae quo quod, sequi, quas consequuntur, magni eum 
        repellendus autem est quis facere? Temporibus voluptatem, 
        fugiat laudantium sequi illum distinctio non!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aut beatae quo quod, sequi, quas consequuntur, magni eum 
        repellendus autem est quis facere? Temporibus voluptatem, 
        fugiat laudantium sequi illum distinctio non!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aut beatae quo quod, sequi, quas consequuntur, magni eum 
        repellendus autem est quis facere? Temporibus voluptatem, 
        fugiat laudantium sequi illum distinctio non!
      </div>
    </div>
  )
}
