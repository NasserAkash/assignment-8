import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We Build <br />
            <span className="text-[#9F62F2]">Productive</span> Apps
          </h1>
          <p className="py-6 text-base sm:text-lg md:text-xl">
            At <span className="font-semibold text-[#9F62F2]">HERO.IO</span>, we
            craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting. <br className="hidden sm:block" />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-success  w-36 sm:w-40 md:w-44 flex items-center justify-center gap-2"
            >
              <IoLogoGooglePlaystore className="text-lg sm:text-xl" />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline  w-36 sm:w-40 md:w-44 flex items-center justify-center gap-2"
            >
              <FaAppStore className="text-lg sm:text-xl" />
              App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
