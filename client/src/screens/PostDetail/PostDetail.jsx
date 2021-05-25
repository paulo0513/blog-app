import Layout from "../../components/Layout/Layout.jsx";
import { getPost, deletePost } from "../../services/posts";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PostDetail = (props) => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  return (
    <Layout>
      <div className="post-detail">
        <img className="post-detail-image" src={post.imgURL} alt={post.title} />
        <div className="detail">
          <div className="title">{post.title}</div>
          <div className="content">{post.content}</div>
          <div className="author">{post.author}</div>
          <button className="edit-button">
            <Link className="edit-link" to={`/posts/${post._id}/edit`}>
              Edit
            </Link>
          </button>
          <button
            className="delete-button"
            onClick={() => deletePost(post._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
