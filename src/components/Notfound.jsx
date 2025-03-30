import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <NavLink to={"/"}>Go to Home</NavLink>
    </>
  );
};

export default Notfound;
