import React, { useEffect } from "react";
import { connect } from "react-redux";
import { decreaseCounter, fetchUser, increaseCounter } from "./actions";
import "./App.css";
import logo from "./logo.svg";

function App({ counter, todos, increment, decrement, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  console.log(todos);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter}</p>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increaseCounter(value)),
    decrement: (value) => dispatch(decreaseCounter(value)),
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
