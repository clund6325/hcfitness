import { Jumbotron } from 'react-bootstrap';
import BlogList from './BlogList';

const Blogs = () => {
  return(
    <>
      <Jumbotron>
        <h1>Blogs Page</h1>
      </Jumbotron>
      <BlogList/>
    </>
  )
}

export default Blogs;