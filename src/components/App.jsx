import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from 'redux/auth/authOperations';

import { PrivateRoute } from './PrivateRoute';
import RestrictedRoute from 'RestrictedRoute';
import authSelectors, { selectAuthToken } from 'redux/auth/authSelectors';
// import { getContacts } from 'redux/contacts/operations';
import Loader from './Loader/Loader';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/operations';
// import {selectorContacts, selectorLoader,selectorError} from '../redux/selectors'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isToken = useSelector(selectAuthToken);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    if (isToken) {
      dispatch(refreshUser());
    }
  }, [isToken, dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<RestrictedRoute component={HomePage} />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};
// const [contacts, setContakts] = useState(
//   () => JSON.parse(localStorage.getItem('contacts')) ?? []
// );
// const contacts = useSelector(selectorContacts);
// const isLoading = useSelector(selectorLoader);
// const error = useSelector(selectorError);
// const dispatch = useDispatch();
// useEffect(() => {

//    dispatch(getContacts());
// }, [dispatch]);

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const findContact = contact => {
//   return contacts.find(
//     item => item.name.toLowerCase() === contact.name.toLowerCase()
//   );
// };

//   setContakts(prev => [...prev, contact]);
// };
// const applyFilters = () => {
//   return contacts.filter(
//     contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.includes(filter)
//   );
// };
