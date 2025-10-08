import React from "react";
import Banner from "../../Components/Banner/Banner";
import Apps from "../Apps/Apps";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Banner></Banner>
      <Apps></Apps>
    </div>
  );
};

export default Home;
