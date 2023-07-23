import Section from '../../section/Section';
import Bookcontact from '../../bookcontact/Bookcontact';
import { Container } from './ContactsPage.styles';
import { Contacts } from '../../../contacts/Contacts';
import { useEffect, useState } from 'react';
import { FilterContacts } from '../../../contacts/filter-contacts/FilterContacts';
import Loader from '../../Loader/Loader';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';

export default function ContactsPage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleChengeInput = filter => {
    setFilter(filter);
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);


  return (
    <Container>
      <Loader>
        <Section>
          <Bookcontact></Bookcontact>
        </Section>
        <Section title="Contacts">
          <FilterContacts filter={filter} onChangeInput={handleChengeInput} />
          <Contacts />
        </Section>
      </Loader>
    </Container>
  );
}
