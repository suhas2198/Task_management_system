import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark text-white p-3 header">
      <h3 className="text-center">Task Management System</h3>
      <div>
      <Link to="login">
        <button className=" btn btn-success me-3">Login</button>
      </Link>
      <Link to="login">
        <button className=" btn btn-danger ">Logout</button>
      </Link>
      </div>
    </div>
  );
};

export default Header;
