import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './action';

//函数写无状态组件
// const App = function(props) {
//   return (
//     <div className="App">
//         <span>{ props.number }</span>
//         <button onClick={() => props.increment(0)}>increment</button>
//         <button onClick={() => props.decrement(1)}>decrement</button>
//     </div>
//   )
// }

//箭头函数写无状态组件
const App = (props) => (
  <div className="App">
        <span>{ props.number }</span>
        <button onClick={() => props.increment(0)}>increment</button>
        <button onClick={() => props.decrement(1)}>decrement</button>
  </div>
)

//继承方式写组件
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <span>{ this.props.number }</span>
//         <button onClick={() => this.props.increment(0)}>increment</button>
//         <button onClick={() => this.props.decrement(1)}>decrement</button>
//       </div>
//     );
//   }
// }

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
