import { Link } from "react-router-dom";

const Post = (props) => {
  // need to add links for post to post detail
  return (
    <Link to={`/posts/${props._id}`}>
      <div className="post">
        <h3>{props.title}</h3>
        <img src={props.imgURL} alt="blog-post-visual" />
        <p>{props.content}</p>
        <p>
          <em>- {props.author}</em>
        </p>
      </div>
    </Link>
  );
};

export default Post;
