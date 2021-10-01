import { useEffect } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import  { Link } from 'react-router-dom';

const PostList = ({ blogId, posts, getAllPosts }) => {
  useEffect( () => {
    getAllPosts(blogId)
  }, [])

  return (
    <>
      { posts.length > 0 ?
        <ul>
          { posts.map( p =>
            <li>
              <Link to={{
                pathname: "/blogs/" + blogId + "/posts/" + p.id
              }}>
                Post #: {p.id}
              </Link>
            </li>  
          )}
        </ul>
        :
        <p>No Posts</p>
      }
    </>
  )
}

const ConnectedPostList = (props) => (
  <PostConsumer>
    { value => <PostList {...props} {...value} />}
  </PostConsumer>
)

export default ConnectedPostList;