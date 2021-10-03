import { useState, useEffect } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import { Form, Input } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const PostForm = ({ addPost, id, title, body, author, updatePost, handleEditClose, match, history }) => {
  const [post, setPost] = useState({ title: "", body: "", author: "" })
  
  useEffect( () => {
    if(id) {
      setDay({title, body, author})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPost({...post})
    if (id) {
      updatePost(id, post, history)
      handleEditClose()
    } else {
      addPost(post)
    }
    setPost({ title: "", body: "", author: "" })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Title</Form.Label>
      <Form.Group controlId="FormBasicTitle">
        <Form.Control
          type="text"
          placeholder="title"
          name="title"
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
        />
        </Form.Group>
        <Form.Label>Body</Form.Label>
        <Form.Group controlId="FormBasicBody">
          <Form.Control
            type="text"
            placeholder="body"
            name="body"
            value={post.body}
            onChange={(e) => setPost({...post, body: e.target.value})}
          />
        </Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Group controlId="FormBasicAuthor">
          <Form.Control
            type="text"
            placeholder="author"
            name="author"
            value={post.author}
            onChange={(e) => setPost({...post, author: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

const ConnectedPostForm = (props) => (
  <PostConsumer>
    { value => <PostForm {...props} {...value} /> }
  </PostConsumer>
)
export default withRouter(ConnectedPostForm);