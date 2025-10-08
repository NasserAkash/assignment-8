import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen flex flex-col justify-between">
      <div className="hero-content text-center flex-grow flex flex-col justify-center">
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
              className="btn btn-outline btn-success w-36 sm:w-40 md:w-44 flex items-center justify-center gap-2"
            >
              <IoLogoGooglePlaystore className="text-lg sm:text-xl" />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-36 sm:w-40 md:w-44 flex items-center justify-center gap-2"
            >
              <FaAppStore className="text-lg sm:text-xl" />
              App Store
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <img src={heroImg} alt="Hero" className="mx-auto" />
      </div>

      <div className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-10 sm:py-12 text-white">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
    Trusted by Millions, Built for You
  </h1>

  <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center gap-8 px-6 text-center">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Total Downloads</h2>
      <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold">29.6M</p>
      <p className="text-sm sm:text-base">21% more than last month</p>
    </div>

    <div>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Total Reviews</h2>
      <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold">906K</p>
      <p className="text-sm sm:text-base">46% more than last month</p>
    </div>

    <div>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Active Apps</h2>
      <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold">132+</p>
      <p className="text-sm sm:text-base">31 more will Launch</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Banner;
