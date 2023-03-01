import classes from './post.module.css';
const Post = ({author,title})=>{

    const names=['shiny','kavery'];
    const chosenName = Math.random()> 0.5 ?names[0]:names[1]
    return (
<div className={classes.post}>
    <p className={classes.author}>{author}</p>
    <p className={classes.text}>{title}</p>
  
</div>
    )
}
export default Post;