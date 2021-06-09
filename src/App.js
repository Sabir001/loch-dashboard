import logo from "./logo.svg";
import { connect } from "react-redux";
import "./App.css";
import { decreaseCounter, increaseCounter } from "./actions";

function App({ counter, increment, decrement }) {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increaseCounter(value)),
    decrement: (value) => dispatch(decreaseCounter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
