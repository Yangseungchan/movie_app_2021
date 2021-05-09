import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigator">
      <Link className="navigator--link" to="/">
        Home
      </Link>
      <Link className="navigator--link" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
