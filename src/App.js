import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/home" render={(props) => <HomeLayout {...props} />} />

        <Redirect from="/" to="/auth/login" />
      </Switch>
    </div>
  );
}

export default App;
