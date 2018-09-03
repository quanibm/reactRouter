import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        <li>
          <Link to="/test">console.log(test)</Link>
        </li>
      </ul>
      <hr />

      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <Test path="/test" component={Test} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

const Test = a => <div>{console.log(a)}</div>;

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => {
              history.push("/");
            });
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log({...rest},{...props})
      console.log(Component)
      console.log(props)
      return true ? (
        <Component {...props} />
      ) : (
        // <div>1123</div>
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

const Public = () => <h3>public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login() {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>you must log in to view the page at {from.pathname}</p>
        <button onClick={this.login.bind(this)}>Log in</button>
      </div>
    );
  }
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <AuthExample />
      </div>
    );
  }
}
