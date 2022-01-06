import React, { useState } from 'react';
import axios from 'axios';

export const PostContext = React.createContext();
export const PostConsumer = PostContext.Consumer;

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const getAllPosts = (blogId) => {
    axios.get(`/api/blogs/${blogId}/posts`)
      .then( res => {
        setPosts(res.data)
      })
      .catch( err => console.log(err))
  }

  const addPost = (blogId, post) => {
    axios.post(`/api/blogs/${blogId}/posts`, { post })
      .then( res => {
        setPosts([...posts, res.data])
      })
      .catch( err => console.log(err))
  }

  const updatePost = ( blogId, id, post, history ) => {
    axios.put(`/api/blogs/${blogId}/posts/${id}`, { post })
      .then( res => {
        const updatedPosts = posts.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setPosts(updatedPosts)
        history.push('/blogs')
      })
      .catch( err => console.log(err))
  }

  const deletePost = ( blogId, id, history ) => {
    axios.delete(`/api/blogs/${blogId}/posts/${id}`)
      .then( res => {
        setPosts(posts.filter( p => p.id !== id))
        alert(res.data.message)
        history.push('/blogs')
      })
      .catch( err => console.log(err))
  }

  return(
    <PostContext.Provider value={{
      posts,
      getAllPosts: getAllPosts,
      addPost: addPost,
      updatePost: updatePost,
      deletePost: deletePost
    }}>
      { children }
    </PostContext.Provider>
  )
}

export default PostProvider;