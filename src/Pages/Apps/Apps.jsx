import React, { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Apps = () => {
  const [allFeatureApps, setAllFeatureApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("FeatureApps.json")
      .then((res) => res.json())
      .then((data) => {
        setAllFeatureApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading apps:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-dots loading-xl text-[#9F62F2]"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-5 mt-16">Trending Apps</h1>
        <p>Explore all trending apps on the market developed by us</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allFeatureApps.slice(0, 8).map((app) => (
          <Link key={app.id} to={`/AppDetails/${app.id}`}>
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 w-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-contain"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title flex justify-between items-center">
                  {app.title}
                  {app.isNew && (
                    <div className="badge badge-secondary">NEW</div>
                  )}
                </h2>
                <p className="text-sm text-gray-500">
                  {app.description || "No description available."}
                </p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar /> {app.ratingAvg}
                  </div>
                  <div className="flex items-center text-green-500">
                    <GoDownload /> {app.downloads}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/AllApps"
          className="btn border-none text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] 
               hover:from-[#9f62f2] hover:to-[#632ee3] transition-all duration-300 
               transform hover:scale-105 px-8 py-3 rounded-lg shadow-lg"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Apps;
