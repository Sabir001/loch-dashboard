import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import { signOut } from "../actions/index";
import Header from "../components/Common/Header";
import routes from "../routes";
import { ProtectedRoute } from "../utils/ProtectedRoute";

function HomeLayout({ signout, userSignOut, history }) {
  const getRoutes = (routes) => {
    console.log(
      routes.filter((prop) => prop.layout === "/home").map((prop, key) => prop)
    );
    return routes
      .filter((prop) => prop.layout === "/home")
      .map((prop, key) => {
        return (
          <ProtectedRoute
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (signout && token) {
      userSignOut();
      history.push("/auth/sign-in");
    }
  }, [signout, history, userSignOut]);

  return (
    <>
      <Header />
      <Switch>{getRoutes(routes)}</Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    signout: state.auth.signout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
