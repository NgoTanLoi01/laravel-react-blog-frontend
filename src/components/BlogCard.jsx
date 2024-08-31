/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog }) => {
  const showImage = (img) => {
    return img
      ? "http://127.0.0.1:8000/uploads/blogs/" + img
      : "https://placehold.co/600x400";
  };

  return (
    <div className="col-12 col-md-2 col-lg-3 mb-3">
      <div className="card border-0 shadow-lg">
        <img
          src={showImage(blog.image)}
          height="200"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h2 className="card-title h5">{blog.title}</h2>
          <p>{blog.shortDesc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a href={"/blog/" + blog.id} className="btn btn-dark">
              Read More
            </a>
            <a href={"/blog/edit/" + blog.id} className="btn btn-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
