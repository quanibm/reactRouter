import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const AuthExample = () => (
  <div>
    <ul>
      <li>
        <Link to="/public">public</Link>
      </li>
      <li>
        <Link to="/protected">protected</Link>
      </li>
    </ul>

    <Route path="/public" component={Public} />
    <Ppp path="/protected" component={Protected} />
  </div>
);

class Ppp extends React.Component {
  state = {
    isLogin: false
  };
  render() {
    const { isLogin } = this.state;
    return (
      <Route
        render={() => {
          isLogin ? (
            <Component {...this.props} />
          ) : (
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
  }
}

const Public = () => <h3>public</h3>;
const Protected = () => <h3>Protected</h3>;

export default class extends React.Component {
  render() {
    return (
      <Router>
        <AuthExample />
      </Router>
    );
  }
}
