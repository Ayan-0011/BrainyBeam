function PostCard({ post }) {
  return (
    <div className="card">
      <img src={post.image}alt=""/>

      <h3>{post.caption}</h3>
    </div>
  );
}

export default PostCard;