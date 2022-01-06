import { useEffect } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import  { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const PostList = ({ blogId, posts, id, getAllPosts }) => {
  useEffect( () => {
    getAllPosts(blogId)
  }, [])

  return (
    <Card>
      <ListGroup>
        { posts.length > 0 ?
          <>
            { posts.map( p =>
              <ListGroup.Item>
                <Link to={{
                  pathname: "/blogs/" + blogId + "/posts/" + p.id, state: {...p}
                }}>
                  Post #: {p.id}
                </Link>
              </ListGroup.Item>  
            )}
          </>
          :
          <p>No Posts</p>
        }
      </ListGroup>
    </Card>
  )
}

const ConnectedPostList = (props) => (
  <PostConsumer>
    { value => <PostList {...props} {...value} />}
  </PostConsumer>
)

export default ConnectedPostList;