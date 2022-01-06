import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import BlogForm from './BlogForm';
import { BlogConsumer } from '../../providers/BlogProvider';
import PostList from '../posts/PostList';
import PostForm from '../posts/PostForm';
import Posts from '../posts/Posts';

const BlogShow = ({ location, match, deleteBlog, history }) => {
const [editshow, setEditShow] = useState(false);

const handleEditClose = () => setEditShow(false);
const handleEditShow = () => setEditShow(true);

  return(
    <>
      <h1>{location.state.title}</h1>
      <p>Category: {location.state.category}</p>
      {''}
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {''}
      <Button variant="danger" onClick={() => deleteBlog(match.params.id, history)}>Delete</Button>
      {/* <Posts blogId={location.state.id} /> */}
      <PostList blogId={location.state.id} />
      <PostForm blogId={location.state.id} />
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Blog Title: {location.state.title} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BlogForm {...location.state } handleEditClose={handleEditClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedBlogShow = (props) => (
  <BlogConsumer>
    { value => <BlogShow {...props} {...value}/> }
  </BlogConsumer>
)

export default ConnectedBlogShow;