import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
const NewPost = ({ onCloseModal, addPost }) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredAuthor, setenteredAuthor] = useState("");
  const [postInfo, setpostInfo] = useState([]);
  const textChangeHandler = (event) => {
    setenteredtitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setenteredAuthor(event.target.value);
  };
  const submitPostHandler = (event) => {
    event.preventDefault();
    let postData = { authorName: enteredAuthor, postBody: enteredAuthor };
  
    setpostInfo(postData);
    addPost(postData);
    onCloseModal();
  };

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitPostHandler}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          required
          rows={3}
          onChange={textChangeHandler}
          value={enteredtitle}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
          value={enteredAuthor}
        />
      </p>
      <p className={classes.actions}>
        <Link to='/' type="button" onClick={onCloseModal} >
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
};
export default NewPost;
