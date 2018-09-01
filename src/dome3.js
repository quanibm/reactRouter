import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => <h3>Home</h3>;
const Products = () => <h3>Products</h3>;
const Category = () => <h3>Category</h3>;

const Example = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">products</Link>
      </li>
      <li>
        <Link to="/category">category</Link>
      </li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/category" component={Category} />
    <Route
      path="/:id"
      render={() => (
        <p>
          {" "}
          I want this text to show up for all routes other than '/', '/products'
          and '/category'{" "}
        </p>
      )}
    />
  </div>
);

class App extends React.Component {
  render() {
    return <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/null">NULL</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
        </Switch>

        <Switch>
          <Route exact path="/" component={Home} />
          {/* switch 将迭代所有route子元素,仅渲染与当前位置匹配的第一个子元素. */}
          <Route exact path="/" component={Category} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          {/* 当没有路径与当前位置匹配的时候就选择下面这个组件.(这样的功能可以实现404的效果) */}
          <Route render={() => <p>
                页面走丢了.
              </p>} />
        </Switch>
      </div>;
  }
}

export default class extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Example /> */}
          <App />
        </div>
      </Router>
    );
  }
}
