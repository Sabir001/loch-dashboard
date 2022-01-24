import { connect } from "react-redux";
import Deals from "../components/Deal";
import { fetchUser } from "../actions/DealsAction";

const mapStateToProps = (state) => {
  return {
    todos: state.deals.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (value) => dispatch(fetchUser(value)),
  };
};

const DealsContainer = connect(mapStateToProps, mapDispatchToProps)(Deals);

export default DealsContainer;
