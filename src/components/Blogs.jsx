import React from "react";
import BlogCard from "./BlogCard";


const Blogs = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3">
        <h4>Blogs</h4>
        <a href="/create" className="btn btn-primary ms-auto">
          Create
        </a>
      </div>
      <div className="row">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
