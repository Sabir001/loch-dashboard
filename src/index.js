import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./createStore";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={hist} context={ReactReduxContext}>
          <App />
        </ConnectedRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
