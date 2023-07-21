import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";



const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(authSelectors.selectUserisAuth);

  return isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;