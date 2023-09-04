import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-center m-1 p-3">Blog App</h1>
      <Outlet />
    </div>
  );
};


export default Home;
