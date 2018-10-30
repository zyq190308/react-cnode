import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './reducer';

import { increment, decrement } from './action'

let store = createStore(reducer);
let unsubscribe = null;

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
    unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().number
      })
    })

  }
  componentWillUnmount() {
    unsubscribe();
  }
  increment() {
    let tempNum = this.state.number
    store.dispatch(increment(++tempNum))
  }
  decrement() {
    let tempNum = this.state.number
    store.dispatch(decrement(--tempNum))
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
