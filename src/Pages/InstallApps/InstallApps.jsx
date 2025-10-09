import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DownloadIconImg from "../../assets/icon-downloads.png";
import RateIcon from "../../assets/icon-ratings.png";

const InstallApps = () => {
  const data = useLoaderData() || [];
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (data.length === 0) {
      setInstalledApps([]);
      setLoading(false);
      return;
    }

    const installedIds =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const apps = data.filter((app) => installedIds.includes(app.id));
    setInstalledApps(apps);
    setLoading(false); 
  }, [data]);


  useEffect(() => {
    if (!sortOrder) return;
    const sortedApps = [...installedApps].sort((a, b) => {
      if (sortOrder === "high-low") return b.downloads - a.downloads;
      if (sortOrder === "low-high") return a.downloads - b.downloads;
      return 0;
    });
    setInstalledApps(sortedApps);
  }, [sortOrder]);

  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);

    const installedIds =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const updatedIds = installedIds.filter((appId) => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));

    toast.info(`${title} has been uninstalled.`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col mx-auto p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold p-5">Your Installed Apps</h1>
        <p className="text-xl text-gray-600 p-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-700 font-semibold">
          Total Installed Apps: {installedApps.length}
        </div>
        <div className="flex items-center gap-2">
          <label className="font-semibold text-gray-700">
            Sort by Downloads:
          </label>
          <select
            className="bg-gray-600 border rounded px-2 py-1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">None</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      </div>
      {installedApps.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-20">
          No apps installed yet.
        </div>
      ) : (
        installedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h2 className="font-semibold text-lg">{app.title}</h2>
                <div className="flex items-center gap-4 mt-1 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <img
                      src={DownloadIconImg}
                      className="w-4 h-4"
                      alt="Downloads"
                    />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={RateIcon} className="w-4 h-4" alt="Rating" />
                    <span>{app.ratingAvg}</span>
                  </div>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id, app.title)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
            >
              Uninstall
            </button>
          </div>
        ))
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default InstallApps;
