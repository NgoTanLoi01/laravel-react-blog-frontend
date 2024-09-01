import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const [keyword, setKeyword] = useState("");

  const fetchBlogs = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/blogs");
    const result = await res.json();
    setBlogs(result.data);
  };

  const searchBlogs = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/blogs?keyword=" + keyword);
    const result = await res.json();
    setBlogs(result.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center py-3">
        <form onSubmit={(e) => searchBlogs(e)}>
          <div className="input-group w-30">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="form-control"
              placeholder="Search blogs"
            ></input>
            <button className="btn btn-dark ms-2">Search</button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-between align-items-center py-3">
        <h4>Blogs</h4>
        <a href="/create" className="btn btn-primary ms-auto">
          Create
        </a>
      </div>
      <div className="row">
        {blogs &&
          blogs.map((blog) => {
            return (
              <BlogCard
                blogs={blogs}
                setBlogs={setBlogs}
                blog={blog}
                key={blog.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Blogs;
