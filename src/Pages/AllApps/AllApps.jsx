import React, { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppError from "../../assets/App-Error.png";

const AllApps = () => {
  const [allFeatureApps, setAllFeatureApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredApps = allFeatureApps.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-ring loading-xl text-[#9F62F2]"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-5 mt-16">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-lg font-medium">
          {filteredApps.length} app{filteredApps.length !== 1 && "s"} found
        </p>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full sm:w-64"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px]">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
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
          ))
        ) : (
          <div className="col-span-full flex flex-col justify-center items-center py-20 text-gray-500 text-lg gap-4">
            <img src={AppError} alt="No apps found" className=" opacity-80" />
            <p className="font-semibold text-center">
              No apps found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
