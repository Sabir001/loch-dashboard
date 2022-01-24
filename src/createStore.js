import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import sagas from "./sagas/sagas";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store =
  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        rootReducer(history),
        compose(
          applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            sagaMiddleware
          ),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : createStore(
        rootReducer(history),
        compose(
          applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            sagaMiddleware
          )
        )
      );

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
