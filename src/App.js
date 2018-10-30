import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((state) => ({
      number: ++state.number
    }));
  }
  decrement() {
    this.setState((state) => ({
      number: --state.number
    }));
  }
  render() {
    return (
      <div className="App">
        <span>{ this.state.number }</span>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default App;
