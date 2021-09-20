import { useEffect } from 'react';
import { BlogConsumer } from '../../providers/BlogProvider';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, getAllBlogs }) => {
  
  useEffect( () => {
    getAllBlogs()
  }, [])

  return(
    <>
      <ListGroup>
        { blogs.map( b =>
          <Link to={{
            pathname: `/blogs/${b.id}`,
            state: {...b}
          }}>
            <ListGroup.Item>Blog for {b.create_at}</ListGroup.Item>
          </Link>  
        )}
      </ListGroup>
    </>
  )
}

const ConnectedBlogList = (props) => (
  <BlogConsumer>
    { value => <BlogList {...props} {...value}/> }
  </BlogConsumer>
)

export default ConnectedBlogList;