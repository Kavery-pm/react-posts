import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
const PostsList = ({ onCloseModal, ismodalVisible }) => {
  const [posts, setposts] = useState([]);
  const addPostHandler = (postData) => {
    
    fetch('http://localhost:8080/posts', {
      method:'POST',
      body:JSON.stringify(postData),
      headers:{
        'Content-type':'application/json'}
    });
    setposts((existingPosts)=>[postData,...existingPosts]);
  };
  return (
    <>
      {ismodalVisible && (
        <Modal onCloseModal={onCloseModal}>
          <NewPost onCloseModal={onCloseModal} addPost={addPostHandler}/>
        </Modal>
      )}
      {posts.length>0 &&
      <ul className={classes.posts}>
        {posts.map((item) => (
          <Post
            author={item.authorName}
            title={item.postBody}
            key={posts.authorName}
          />
        ))}
      </ul>}
      {posts.length==0 && <div style={{textAlign:'center',color:'white'}}>
        <h3>There are no posts</h3>
        <p>Please start adding some...</p>
        <p></p>
        </div>}
    </>
  );
};
export default PostsList;
