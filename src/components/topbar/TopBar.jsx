import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" />
        <i className="topIcon fab fa-twitter-square" />
        <i className="topIcon fab fa-pinterest-square" />
        <i className="topIcon fab fa-instagram-square" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ?
            <img
              className="topImg"
              src="https://source.unsplash.com/random"
              alt=""
            />
            :
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            </ul>
        }

        <i className="topSearchIcon fas fa-search" />
      </div>
    </div>
  )
}
