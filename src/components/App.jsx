// import Section from './section/Section';
// import Bookcontact from './bookcontact/Bookcontact';
// import { Container } from './App.styled';
// import { Contacts } from 'contacts/Contacts';
// import { useState } from 'react';
// import { FilterContacts } from 'contacts/filter-contacts/FilterContacts';
// import Loader from './Loader/Loader';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  // const [filter, setFilter] = useState('');

  // const handleChengeInput = filter => {
  //   setFilter(filter);
  // };
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/phonebook" component={<Phonebook/>}></Route>
          <Route path="*" component={<Navigate to={'/phonebook'} />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="register"></Route>
          <Route path="/login"></Route>
        </Routes>
      )}
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
