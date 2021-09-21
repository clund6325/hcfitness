import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Blogs from './components/blogs/Blogs';
import BlogShow from './components/blogs/BlogShow';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/blogs" component={Blogs} />
          <ProtectedRoute exact path="/blogs/:id" component={BlogShow} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;