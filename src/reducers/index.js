import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dealsReducer from "./DealsReducer";
import signinReducer from "./SigninReducer";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["signin"],
};

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: persistReducer(authPersistConfig, signinReducer),
    deals: dealsReducer,
  });

export default rootReducer;
