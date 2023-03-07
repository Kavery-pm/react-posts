
import classes from './post.module.css';
const Post = ({author,title})=>{

    
 
    return (
        
<li className={classes.post}>
    <p className={classes.author}>{author}</p>
    <p className={classes.text}>{title}</p>
  
</li>

    )
}
export default Post;