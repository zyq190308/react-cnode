import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './action';


class App extends Component {
  render() {
    return (
      <div className="App">
        <span>{ this.props.number }</span>
        <button onClick={() => this.props.increment(0)}>increment</button>
        <button onClick={() => this.props.decrement(1)}>decrement</button>
      </div>
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
    increment: (text) => dispatch(increment(text)),
    decrement: (text) => dispatch(decrement(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
