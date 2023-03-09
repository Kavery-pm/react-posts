import { useState } from 'react';
import classes from './NewPost.module.css'
const NewPost = ({handleTextAreachange,handleAuthorChange,onCloseModal})=>{
 
   
   
return (
    <form className={classes.form}>
        <p>
        <label htmlFor='text'>Text</label>
        <textarea id='text' required rows={3} onChange={handleTextAreachange} />
        </p>
        <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={handleAuthorChange} />
      </p>
      <p className={classes.actions}>
      <button type='button' onClick={onCloseModal}>Cancel</button>
      <button >Submit</button>
    
      </p>
     
    </form>
)
}
export default NewPost;