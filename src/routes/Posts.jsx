import React from "react";
import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
  return (
    <React.Fragment>
      <Outlet/>
      <PostsList />
    </React.Fragment>
  );
}

export default Posts;
