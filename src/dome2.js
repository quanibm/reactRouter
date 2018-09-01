"use strict";

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
        <li>
          <Link to="/order/modus-create">order</Link>
        </li>
        <li>
          <Link to="/order/asc">asc</Link>
        </li>
      </ul>
      <Route path="/:id" component={Child} exact />
      <Route
        path="/order/:direction(asc|desc)"
        /**参数可以使用正则表示式匹配,也就是说,只要当参数为:asc 或者 desc 的时候 我们的组件ComponentWithRegex 才显示, direction 可以随时设置,这里并不是一个函数.*/
        component={ComponentWithRegex}
      />
      <Route path="/order/:idc" component={Props} />
    </div>
  </Router>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    {console.log(this.props)}
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

class Child extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    );
  }
}

/**props 等于 this.props */
const Props = props => (
  <div>
    {console.log(props)}
    <p>props</p>
  </div>
);

class routerURL extends React.Component {
  render() {
    return (
      <div>
        <ParamsExample />
      </div>
    );
  }
}

export { routerURL as default };
