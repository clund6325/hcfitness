import React, { useState, useEffect } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import PostList from './PostList';
import PostForm from './PostForm';

const Posts = ({ getAllPosts, blogId, match, id, location, addPost }) => {
  useEffect( () => {
    getAllPosts(blogId, id)
  }, [])

  return(
    <div>
      <PostList blogId={match.params.blogId} id={match.paa} />
      <PostForm blogId={match.params.blogId} />
    </div>
  )
}

const ConnectedPosts = (props) => (
  <PostConsumer>
    { value => <Posts {...props} {...value} />}
  </PostConsumer>
)

export default ConnectedPosts;