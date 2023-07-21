import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styles';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const isAuth = useSelector(authSelectors.selectUserisAuth);

  return (
    <Header>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
