import React from "react";
import Header from "../parts/Header.js";
import Footer from "../parts/Footer.js";
import Comment from "../parts/Comment.js";
import Postdesc from "../parts/Postdesc.js";

const Single = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <Postdesc />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default Single;
