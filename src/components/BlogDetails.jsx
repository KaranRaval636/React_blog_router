import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();

  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <div className="blog-details">
        <NavLink to="/bloglist">🔙 Back to Blog</NavLink>
      </div>
    </>
  );
};

export default BlogDetails;
