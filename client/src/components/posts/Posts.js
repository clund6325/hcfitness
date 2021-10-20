import React, { useState, useEffect } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import PostList from './PostList';
import PostForm from './PostForm';

const Posts = ({ getAllPosts, blogId, match, location, addPost }) => {
  useEffect( () => {
    getAllPosts(blogId)
  }, [])

  return(
    <div>
      <PostList blogId={blogId}/>
      <PostForm blogId={blogId} addPost={addPost} />
    </div>
  )
}

const ConnectedPosts = (props) => (
  <PostConsumer>
    { value => <Posts {...props} {...value} />}
  </PostConsumer>
)

export default ConnectedPosts