import { connect } from "react-redux";
import Deals from "../components/Deal";
import { fetchReceivedDeals } from "../actions/DealsAction";

const mapStateToProps = (state) => {
  return {
    todos: state.deals.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReceivedDeals: () => dispatch(fetchReceivedDeals()),
  };
};

const DealsContainer = connect(mapStateToProps, mapDispatchToProps)(Deals);

export default DealsContainer;
