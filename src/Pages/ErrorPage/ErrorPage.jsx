import React from "react";
import logo from "/src/assets/logo.png";
import { Link } from "react-router";
import ErrorPageImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] text-center gap-6">
      <img src={ErrorPageImg} alt="404 Error" className="w-72 h-auto" />

      <h1 className="text-4xl font-bold ">404 - Page Not Found</h1>

      <Link
        to="/"
        className="btn btn-ghost text-xl flex items-center gap-2 mt-4 hover:scale-105 transition"
      >
        <img className="w-10" src={logo} alt="Logo" />
        <span className="font-semibold">HERO.IO</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
