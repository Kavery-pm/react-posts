const Post = ({author,title})=>{
    const names=['shiny','kavery'];
    const chosenName = Math.random()> 0.5 ?names[0]:names[1]
    return (
<div>
    <p>{author}</p>
    <p>{title}</p>
  
</div>
    )
}
export default Post;