import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostsList from "./components/PostsList";

function App() {
  const [ismodalVisible, setismodalVisible] = useState(true);
  const openModalHandler = () => {
    setismodalVisible(true);
  };
  const closeModalHandler = ()=>{
    setismodalVisible(false);
}
  return (
    <React.Fragment>
      <MainHeader onCreatePost={openModalHandler} />
      <PostsList onCloseModal={closeModalHandler} ismodalVisible={ismodalVisible}/>
    </React.Fragment>
  );
}

export default App;
