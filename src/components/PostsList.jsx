import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
const PostsList = ({author,title,onCloseModal,ismodalVisible})=>{
  
    const [enteredtitle, setenteredtitle] = useState('');
    const [enteredAuthor, setenteredAuthor] = useState('')
    const textChangeHandler = (event)=>{
        setenteredtitle(event.target.value);
    }
    const authorChangeHandler = (event)=>{
setenteredAuthor(event.target.value);
    }
   
return (
    <>
    {ismodalVisible && 
    <Modal onCloseModal={onCloseModal}>
        <NewPost handleTextAreachange={textChangeHandler} handleAuthorChange={authorChangeHandler}/>
    
 
    </Modal>}
    <ul className={classes.posts}>
        <Post author={enteredAuthor} title={enteredtitle}/>
        <Post author='kavery' title='hayday'/>
    </ul>
    </>
)
}
export default PostsList;