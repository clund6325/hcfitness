import { AuthConsumer } from '../../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout, location, history }) => {
  const rightNavItems = () => {
    if (user) {
      return(
        <Nav className="justify-content-end">
          <Button variant="outline-info" onClick={() => handleLogout(history)}>Logout</Button>
        </Nav>
      )
    }
    else{
      return(
        <Nav className="mr-auto justify-content-end">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
        </Nav>
      )
    }
  }
  return(
    <Navbar variant="outline-info">
      <Link to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>
      { rightNavItems() }
    </Navbar>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { auth => <MainNavbar {...props} {...auth} /> }
  </AuthConsumer>
)

export default withRouter(ConnectedMainNavbar);