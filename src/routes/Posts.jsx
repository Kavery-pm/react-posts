import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import Post from "../components/Post";
import PostsList from "../components/PostsList";

function Posts() {
  return (
    <React.Fragment>
      <PostsList />
    </React.Fragment>
  );
}

export default Posts;
