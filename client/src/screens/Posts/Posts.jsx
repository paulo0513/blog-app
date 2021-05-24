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
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <main className="posts-container">
        <span>Posts Page</span>
        <Post />
      </main>
    </Layout>
  );
};

export default Posts;
