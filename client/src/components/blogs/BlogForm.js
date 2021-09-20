import { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BlogConsumer } from '../../providers/BlogProvider';
import { withRouter } from 'react-router-dom';

const BlogForm = ({ addBlog, id, title, category, updateBlog, handleEditClose, history}) => {
  const [blog, setBlog] = useState({ title: "", category: "" })

  useEffect( () => {
    if (id) {
      setBlog({title, category})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setBlog({...blog})
    if(id) {
      updateBlog(id, blog, history)
      handleEditClose()
    }
    else{
      addBlog(blog)
    }
    setBlog({ title: "", category: "" })
  }

  return(
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="FormBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="title"
            value={blog.title}
            onChange={(e) => setBlog({...blog, title: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="FormBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="category"
            name="category"
            value={blog.category}
            onChange={(e) => setBlog({...blog, category: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default BlogForm;