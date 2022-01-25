import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import routes from "../routes";

function AuthLayout({ history }) {
  /* eslint-disable */
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      history.push("/home/deals");
    }
  }, []);
  /* eslint-enable */

  const getRoutes = (routes) => {
    return routes
      .filter((prop) => prop.layout === "/auth")
      .map((prop, key) => {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      });
  };

  return (
    <>
      <Header />
      <Switch>{getRoutes(routes)}</Switch>
    </>
  );
}

export default AuthLayout;
