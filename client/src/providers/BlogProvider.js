import React, { useState } from 'react';
import axios from 'axios';

export const BlogContext = React.createContext();
export const BlogConsumer = BlogContext.Consumer;

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([])

  const getAllBlogs = () => {
    axios.get("/api/blogs")
      .then( res => {
        setBlogs(res.data)
      })
      .catch( err => console.log(err))
  }

  const addBlog = (blog) => {
    axios.post("/api/blogs", { blog })
      .then( res => {
        setBlogs([...blogs, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateBlog = (id, blog, history) => {
    axios.put(`/api/blogs/${id}`, { blog })
      .then( res => {
        const updatedBlogs = blogs.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b
        })
        setBlogs(updatedBlogs)
        history.push("/blogs")
      })
      .catch( err => console.log(err))
  }

  const deleteBlog = (id, history) => {
    axios.delete(`/api/blogs/${id}`)
      .then( res => {
        setBlogs(blogs.filter( b => b.id !== id))
        alert(res.data.message)
        history.push("/blogs")
      })
      .catch( err => console.log(err))
  }

  return(
    <BlogContext.Provider value={{
      blogs,
      getAllBlogs: getAllBlogs,
      addBlog: addBlog,
      updateBlog: updateBlog,
      deleteBlog: deleteBlog
    }}>
      { children }
    </BlogContext.Provider>
  )
}

export default BlogProvider;