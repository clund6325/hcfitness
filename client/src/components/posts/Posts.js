import React, { useState, useEffect } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import PostList from './PostList';

const Posts = ({ getAllPosts, blogId, match, addPost }) => {
  useEffect( () => {
    getAllPosts(blogId)
  }, [])

  return(
    <div>
      <PostList blogId={match.params.blogId}/>
    </div>
  )
}

const ConnectedPosts = (props) => (
  <PostConsumer>
    { value => <Posts {...props} {...value} />}
  </PostConsumer>
)

export default ConnectedPosts