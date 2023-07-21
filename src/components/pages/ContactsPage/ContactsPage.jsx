import Section from '../../section/Section';
import Bookcontact from '../../bookcontact/Bookcontact';
import { Container } from './ContactsPage.styles';
import { Contacts } from '../../../contacts/Contacts';
import { useState } from 'react';
import { FilterContacts } from '../../../contacts/filter-contacts/FilterContacts';
import Loader from '../../Loader/Loader';

export default function ContactsPage() {
  const [filter, setFilter] = useState('');

  const handleChengeInput = filter => {
    setFilter(filter);
  };

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
