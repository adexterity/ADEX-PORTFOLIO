import React from "react";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="hamburger-list">
          <a href="#">
            <i className="bars icon"></i>
          </a>
        </li>
        <li className="home-list">
          <a href="#">
            <i className="home icon"></i>
          </a>
        </li>
        <li className="book-list">
          <a href="#">
            <i className="book icon"></i>
          </a>
        </li>
        <li className="envelope-list">
          <a href="#">
            <i className="envelope icon"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="cog icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
