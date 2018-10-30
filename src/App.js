import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: store.getState().number
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        number: store.getState().number
      })
    })

  }
  increment() {
    let tempNum = this.state.number
    store.dispatch({
      type: 'increment',
      number: ++tempNum
    })
  }
  decrement() {
    let tempNum = this.state.number
    store.dispatch({
      type: 'decrement',
      number: --tempNum
    })
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
