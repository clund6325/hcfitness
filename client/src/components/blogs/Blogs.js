import { Jumbotron } from 'react-bootstrap';
import BlogList from './BlogList';
import BlogForm from './BlogForm';

const Blogs = () => {
  return(
    <>
      <Jumbotron>
        <h1>Blogs Page</h1>
      </Jumbotron>
      <BlogList/>
      <BlogForm/>
    </>
  )
}

export default Blogs;