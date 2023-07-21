import { useDispatch, useSelector } from 'react-redux';
import { Button, Wrap, Contact } from './Contacts.styled';

import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/operations';
import { deleteContacts } from 'redux/contacts/operations';
import { selectorContacts, selectorFilter } from 'redux/contacts/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectorContacts);
  const filterContacts = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleFilter = () => {
    if (filterContacts === '') return contacts;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterContacts.toLowerCase()) ||
        contact.number.includes(filterContacts)
    );
  };

  const filteredContacts = handleFilter();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Wrap>
            <Contact>
              {contact.name}: {contact.number}
            </Contact>
            <Button
              type="button"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </Button>
          </Wrap>
        </li>
      ))}
    </ul>
  );
};
