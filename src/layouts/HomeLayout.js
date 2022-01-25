import React from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import { signOut } from "../actions/index";
import Header from "../components/Common/Header";
import routes from "../routes";
import { ProtectedRoute } from "../utils/ProtectedRoute";

function HomeLayout() {
  const getRoutes = (routes) => {
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
