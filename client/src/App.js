import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MainNavbar from './components/shared/MainNavbar';
import Blogs from './components/blogs/Blogs';

const App = () => (
  <>
    <MainNavbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/blogs" component={Blogs} />
        <Route component={Nomatch} />
      </Switch>
    </Container>
  </>
)

export default App;