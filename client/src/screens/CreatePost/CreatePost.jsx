import axios from "axios";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const CreatePost = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { title, value } = event.target;
    setPost({
      ...post,
      [title]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div>
        <form className="create-post" onSubmit={handleSubmit}>
          <h2>Create Post</h2>
          <label htmlFor="title">Title</label>
          <input
            className="title"
            type="text"
            placeholder="add your title"
            value={post.title}
            onChange="{handleChange}"
          />
          <input
            className="imgURL"
            type="img"
            placeholder=""
            value={post.imgURL}
            onChange=""
          />
          <label htmlFor="body">Body</label>
          <textarea
            className="message"
            rows={10}
            type="text"
            placeHolder="message"
            value={post.content}
            onChange={handleChange}
          />
          <label htmlFor="author">Author</label>
          <input
            className="author"
            type="text"
            placeholder="author's name"
            value={post.author}
            onChange={handleChange}
          />

          <button>Save your Post</button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
