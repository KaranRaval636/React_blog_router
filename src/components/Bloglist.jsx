import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BlogList = () => {
  const blog = useLoaderData();
  return (
    <>
      <h1>Blog Post</h1>
      <ul className="blog-list">
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogdetails/${blog.id}`}>{blog.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
