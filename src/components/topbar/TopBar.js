import "./topbar.css";

import React from "react";

import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
        <div className="top-part left">
          <i className="top-icon fab fa-facebook-square"></i>
          <i className="top-icon fab fa-twitter-square"></i>
          <i className="top-icon fab fa-instagram-square"></i>
        </div>
        <div className="top-part center">
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && (
              <li className="top-list-item">
                <Link className="link" to="/login">
                  LOGOUT
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="top-part right">
          {user ? (
            <>
              <img
                className="img-top"
                src="https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1104&q=80"
                alt="profile"
              />
              <i className="top-search-icon fas fa-search"></i>
            </>
          ) : (
            <ul className="top-list">
              <li className="top-list-item">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="top-list-item">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        </div>
    </div>
  );
}
