import React, { useState } from "react";
import Editor from "react-simple-wysiwyg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [html, setHtml] = useState("");
  const [imageId, setImageId] = useState("");

  const navigate = useNavigate();

  function onChange(e) {
    setHtml(e.target.value);
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://127.0.0.1:8000/api/save-temp-image", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.status == false) {
      alert(result.errors.image);
      e.target.value = null;
    }

    setImageId(result.image.id);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    const newData = { ...data, description: html, tempImageId: imageId };

    const response = await fetch("http://127.0.0.1:8000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    toast("Blog created successfully!");

    navigate("/");
  };

  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-between align-items-center py-3">
        <h4>Create Blog</h4>
        <a href="/" className="btn btn-primary ms-auto">
          Back
        </a>
      </div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="card border-0 shadow-lg">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                {...register("title", { required: true })}
                type="text"
                className={`form-control ${errors.title && "is-invalid"}`}
                placeholder="Title"
              />
              {errors.title && (
                <p className="invalid-feedback">Title field is required</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Short Description</label>
              <textarea
                {...register("shortDesc")}
                cols="30"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <Editor
                containerProps={{ style: { height: "300px" } }}
                value={html}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                {...register("author", { required: true })}
                type="text"
                className={`form-control ${errors.author && "is-invalid"}`}
                placeholder="Author"
              />
              {errors.author && (
                <p className="invalid-feedback">Author field is required</p>
              )}
            </div>
            <button className="btn btn-dark">Create Blog</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
