import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (/**
 * @exact 这个属性的作用是: 让设置了该属性的组件只在url和path属性全等于的时候显示.
 */
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/topics">Topics</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/about/topics" component={Topics} />
    </div>
  </Router>
);

const Topics = ({ match }) => (
  <div>
    <h2>topics</h2>
    <ul>
      <li>
        {console.log(match)}
        <Link to={`${match.url}/rendering`}>rendering with react</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props-v-state</Link>
      </li>
    </ul>
    <hr />
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
      exact
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{JSON.stringify(match)}</h3>
    <p>
      {match.params.topicId}
    </p>
  </div>
);

const About = () => (
  <div>
    <p>i'm a about page</p>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  render() {
    return <BasicExample />;
  }
}

export default App;
