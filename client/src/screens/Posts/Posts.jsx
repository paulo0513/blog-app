import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";

import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      console.log(allPosts);
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <main className="posts-container">
        {posts.map((post) => (
          <Post
            _id={post._id}
            title={post.title}
            content={post.content}
            imgURL={post.imgURL}
            author={post.author}
          />
        ))}
      </main>
    </Layout>
  );
};

export default Posts;
