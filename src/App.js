import React, { Component } from 'react';

import 'antd/dist/antd.css'; 

import './index.css';
import Header from './pages/header';
import Main from './pages/main';

class App extends Component {
  render() {
    return (
        <div className="app">
          <Header />
          <Main />
        </div>
    );
  }
}

export default App;
