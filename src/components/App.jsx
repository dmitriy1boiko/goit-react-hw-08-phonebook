
import { Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage/ContactsPage';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/operations';
// import {selectorContacts, selectorLoader,selectorError} from '../redux/selectors'

export const App = () => {
  

  return (
    <>
    
      <Routes>
        <Route path="/contacts" element ={<ContactsPage/>}/>
      </Routes>
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