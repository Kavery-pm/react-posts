const Post = ()=>{
    const names=['shiny','kavery'];
    const chosenName = Math.random()> 0.5 ?names[0]:names[1]
    return (
<div>
    <p>{chosenName}</p>
    <p>have a good day</p>
  
</div>
    )
}
export default Post;