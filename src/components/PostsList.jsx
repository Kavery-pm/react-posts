import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
const PostsList = ({ onCloseModal, ismodalVisible }) => {
  const [posts, setposts] = useState([]);
  const addPostHandler = (postData) => {
    console.log(postData);
    setposts((existingPosts)=>[postData,...existingPosts]);
  };
  return (
    <>
      {ismodalVisible && (
        <Modal onCloseModal={onCloseModal}>
          <NewPost onCloseModal={onCloseModal} addPost={addPostHandler}/>
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((item) => (
          <Post
            author={item.authorName}
            title={item.postBody}
            key={posts.authorName}
          />
        ))}
      </ul>
    </>
  );
};
export default PostsList;
