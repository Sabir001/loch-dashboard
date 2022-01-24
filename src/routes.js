import SigninContainer from "./containers/SigninContainer";
import DealsContainer from "./containers/DealsContainer";

const routes = [
  {
    path: "/login",
    component: SigninContainer,
    layout: "/auth",
    authenticationRequired: false,
  },
  {
    path: "/deals",
    component: DealsContainer,
    layout: "/home",
    authenticationRequired: true,
  },
];

export default routes;
