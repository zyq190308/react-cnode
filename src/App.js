import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Index from './pages/Index';
import About from './pages/About';
import Users from './pages/Users';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
                <ul>
                  <li>
                    <Link to="/users/profile">profile</Link>
                    <Route path="/users/profile" component={Profile}/>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/users" exact component={Users} />>
          </Switch>       
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
