import { useDispatch, useSelector } from 'react-redux';
import { logoutOperation } from 'redux/auth/authOperations';

import authSelectors from 'redux/auth/authSelectors';
import { Container, LogOutBtn, UserName } from './UserMenu.styles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);
  const isAuth = useSelector(authSelectors.selectUserisAuth);
  
  return (
    <Container>
      {isAuth && (
        <>
          <UserName>
            Welcome,
            {name}!
          </UserName>
          <LogOutBtn type="button" onClick={() => dispatch(logoutOperation())}>
            Log out
          </LogOutBtn>
        </>
      )}
    </Container>
  );
};
