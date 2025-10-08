import React from "react";
import logo from "/src/assets/logo.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to="/">Home</Link>
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img className="w-10" src={logo} alt="Logo" />
          HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllApps">Apps</Link>
          </li>
          <li>
            <Link to="/">Installation</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/NasserAkash"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-info"
        >
          <FaGithub />
          Contribution
        </a>
      </div>
    </div>
  );
};

export default NavBar;
