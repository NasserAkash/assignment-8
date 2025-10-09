import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DownloadIconImg from "../../assets/icon-downloads.png";
import RateIcon from "../../assets/icon-ratings.png";
import ReviewIcon from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const appId = parseInt(id);

  const app = data.find((app) => app.id === appId);
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.includes(appId)) {
      setInstalled(true);
    }
  }, [appId]);

  if (!app) return <p className="text-center text-red-500">App not found</p>;

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = app;

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(appId)) {
      installedApps.push(appId);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success("App installed successfully!");
    }
  };

  const totalRatings = ratings.reduce((sum, r) => sum + r.count, 0);
  const chartData = ratings
    .slice()
    .reverse()
    .map((r) => ({
      name: `${r.name}`,
      count: r.count,
      percent: totalRatings ? ((r.count / totalRatings) * 100).toFixed(0) : 0,
    }));

  const gradientColors = [
    "#FFA500",
    "#FF9A40",
    "#FF8C00",
    "#FF7F00",
    "#FF6A00",
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 md:w-80 md:h-80 object-cover"
        />
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          <p className="text-gray-600">
            Developed by{" "}
            <a href="#" className="text-purple-600">
              {companyName}
            </a>
          </p>
          <div className="flex flex-wrap gap-6 mt-3">
            <div className="flex flex-col items-center w-24">
              <img src={DownloadIconImg} alt="" className="w-12 h-12 mb-2" />
              <p className="text-gray-500 text-sm text-center mb-1">
                Downloads
              </p>
              <p className="font-bold text-4xl text-center">{downloads}</p>
            </div>

            <div className="flex flex-col items-center w-24">
              <img src={RateIcon} alt="" className="w-12 h-12 mb-2" />
              <p className="text-gray-500 text-sm text-center mb-1">
                Average Rating
              </p>
              <p className="font-bold text-4xl text-center">{ratingAvg}</p>
            </div>

            <div className="flex flex-col items-center w-24">
              <img src={ReviewIcon} alt="" className="w-12 h-12 mb-2" />
              <p className="text-gray-500 text-sm text-center mb-1">
                Total Reviews
              </p>
              <p className="font-bold text-4xl text-center">{reviews}</p>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-6 py-2 font-semibold rounded ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, bottom: 5, left: 10 }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={50} />
            <Tooltip formatter={(value) => [`${value} reviews`, ""]} />
            <Bar dataKey="count">
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={gradientColors[index % gradientColors.length]}
                />
              ))}
              <LabelList
                dataKey="percent"
                position="right"
                formatter={(val) => `${val}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AppDetails;
