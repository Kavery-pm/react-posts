import { useState } from 'react';
import classes from './NewPost.module.css'
const NewPost = (props)=>{
 
   
   
return (
    <form className={classes.form}>
        <p>
        <label htmlFor='text'>Text</label>
        <textarea id='text' required rows={3} onChange={props.handleTextAreachange} />
        </p>
        <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={props.handleAuthorChange} />
      </p>
    </form>
)
}
export default NewPost;