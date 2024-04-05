import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="content"></div>
      <h1>404 not found</h1>
      <Link to={"/"} className="btn">back to Home page</Link>
    </section>
  );
};

export default NotFound;
