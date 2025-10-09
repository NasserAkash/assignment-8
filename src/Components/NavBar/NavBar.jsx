import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AllApps">Apps</Link>
            </li>
            <li>
              <Link to="/InstallApps">Installation</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img className="w-10" src={logo} alt="Logo" />
          HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllApps">Apps</Link>
          </li>
          <li>
            <Link to="/InstallApps">Installation</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/NasserAkash"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-info flex items-center gap-2"
        >
          <FaGithub />
          Contribution
        </a>
      </div>
    </div>
  );
};

export default Navbar;
