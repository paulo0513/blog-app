import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";

const Posts = () => {
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
