import React from 'react';
import logo from "/src/assets/logo.png";
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 not Found</h1>
            <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img className="w-10" src={logo} alt="Logo" />
          HERO.IO
        </Link>
        </div>
    );
};

export default ErrorPage;