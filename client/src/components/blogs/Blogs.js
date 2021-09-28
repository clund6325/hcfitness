import { Jumbotron } from 'react-bootstrap';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import { BlogConsumer } from '../../providers/BlogProvider';

const Blogs = (location) => {
  return(
    <>
      <Jumbotron>
        <h1>Blogs Page</h1>
      </Jumbotron>
      <BlogList/>
      <BlogForm { ...location.state } />
    </>
  )
}

const ConnectedBlogs = (props) => (
  <BlogConsumer>
    { value => <Blogs {...props} {...value} /> }
  </BlogConsumer>
)

export default ConnectedBlogs;