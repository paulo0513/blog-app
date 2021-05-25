import { getPost, updatePost } from '../../services/posts';
import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx'

const EditPost = () => {
  const [post, setPost] = useState({})
  const [isUpdated, setUpdated]
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { title, value } = e.target
    setPost({
      ...post,
      [title]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />
  }

  return (
    <Layout>
      <form className="edit-post" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="edit-title"
          type="text"
          placeholder="Add your title"
          value={post.title}
          onChange={handleChange}
        />
        <input
          className="edit-imgURL"
          type="img"
          placeholder="Add your image link"
          value={post.imgURL }
          onChange={handleChange}
        />
        <label htmlFor="body">Body</label>
        <textarea
          className="edit-message"
          rows={10}
          type="text"
          placeHolder="Message"
          value={post.content}
          onChange={handleChange}
        />
        <label htmlFor="author">Author</label>
        <input
          className="edit-author"
          type="text"
          placeholder="Author"
          value={post.author}
          onChange={handleChange}
        />

        <button type='submit' className='edit-save-button'>Save</button>
      </form>
    </Layout>
  )
}

export default EditPost;