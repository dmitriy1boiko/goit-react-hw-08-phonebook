import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {

  const isAuth = useSelector(authSelectors.selectUserisAuth);

  return isAuth ? Component : <Navigate to={redirectTo} />;
};