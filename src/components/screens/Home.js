import React from "react";
import Header from "../parts/Header.js";
import Footer from "../parts/Footer.js";
import TrendingPosts from "../parts/TrendingPosts.js";
import Slider from "../parts/Slider.js";
import FreshStroies from "../parts/FreshStories.js";
import FreshStories from "../parts/FreshStories.js";

const Home = () => {
  return (
    <div>
      <Header />
      <FreshStories />
      <Slider />
      <TrendingPosts />
      <Footer />
    </div>
  );
};

export default Home;
