import { connect } from "react-redux";
import SigninForm from "../components/Auth/SigninForm";
import { signin } from "../actions/SigninAction";

const mapStateToProps = (state) => {
  return {
    signin: state.auth.signin,
    signinLoader: state.auth.signinLoader,
    redirect: state.auth.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignIn: (value) => dispatch(signin(value)),
  };
};

const SignIn = connect(mapStateToProps, mapDispatchToProps)(SigninForm);

export default SignIn;
