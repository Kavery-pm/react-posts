import { useEffect, useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
const PostsList = ({ onCloseModal, ismodalVisible }) => {
  const [posts, setposts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setisLoading(true);
    const response = await fetch("http://localhost:8080/posts");
    const resData = await response.json();
    setposts(resData.posts);
    setisLoading(false);
  };

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json",
      },
    });
    setposts((existingPosts) => [postData, ...existingPosts]);
  };
  return (
    <>
      {ismodalVisible && (
        <Modal onCloseModal={onCloseModal}>
          <NewPost onCloseModal={onCloseModal} addPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((item) => (
            <Post
              author={item.authorName}
              title={item.postBody}
              key={item.id}
            />
          ))}
        </ul>
      )}
      {!isLoading && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h3>There are no posts</h3>
          <p>Please start adding some...</p>
          <p></p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>posts Loading....</p>
        </div>
      )}
    </>
  );
};
export default PostsList;
