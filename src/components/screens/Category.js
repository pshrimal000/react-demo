import React from "react";
import Posts from "../parts/Posts";
import Sidebar from "../parts/Sidebar";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const Category = () => {
  return (
    <>
      <Header />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
