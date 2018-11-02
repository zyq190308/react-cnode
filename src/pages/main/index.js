import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css';
import Home from '../home';
import Detail from '../detail';

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <Route path="/Detail/:id" exact component={Detail}></Route>
                    <Route path="/" exact component={Home}></Route>
                </div>
            </Router>
        )
    }
}

export default Main;