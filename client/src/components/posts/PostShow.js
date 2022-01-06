import { Button, Modal, Card } from 'react-bootstrap';
import { useState } from 'react';
import  PostForm  from './PostForm';
import  PostList  from './PostList';
import { PostConsumer } from '../../providers/PostProvider';

const PostShow = ({ location, deletePost, updatePost, match, history}) => {
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return(
    <>
    {/* <PostList/> */}
      <Card style={{width: '18rem'}}>
        <Card.Header style={{background: "rgba(152, 72, 255, 100)", border: "rgba(152, 72, 255, 100)", color: "white"}}>
          <text style={{fontWeight: "bold"}}>{location.state.title}</text>
        </Card.Header>
        <Card.Body>
          <text>{location.state.body}</text>
        </Card.Body>
      </Card>
      <Button variant="warning" style={{background:"#ebe5f5", border: "#ebe5f5", color: "black", width: "20rem"}} onClick={() => handleEditShow()}>Edit Post</Button>
      {' '}
      <Button variant="danger" style={{background:"#ebe5f5", border: "#ebe5f5", color: "black", width: "20rem"}} onClick={() => deletePost(location.state.blog_id, match.params.id, history)}>Delete Post</Button>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>{location.state.title} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedPostShow = (props) => (
  <PostConsumer>
    { value => <PostShow {...props} {...value} /> }
  </PostConsumer>
)
export default ConnectedPostShow;