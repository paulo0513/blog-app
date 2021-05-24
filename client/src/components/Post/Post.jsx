import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="post">
      <h3>Title {props.title}</h3>
      <img src={props.imgURL} alt="blog-post-visual" />
      <p>Content {props.content}</p>
      <p>
        <em>- Author {props.author}</em>
      </p>
    </div>
  );
};

export default Post;
