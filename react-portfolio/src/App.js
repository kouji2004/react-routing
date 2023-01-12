import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
      <li>
        <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            exact
            to="/"
        >
          Home
        </NavLink>
      </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
        <Route path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

function Posts(props) {
  console.log(props);
  return <h2>Post List</h2>;
};

export default App;