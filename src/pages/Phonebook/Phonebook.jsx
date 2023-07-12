
import Bookcontact from "components/bookcontact/Bookcontact";
import Loader from "components/Loader/Loader";
import Section from "components/section/Section";
import { Contacts } from "contacts/Contacts";
import { FilterContacts } from "contacts/filter-contacts/FilterContacts";
import { useState } from "react";
import { Container } from "./Phonebook.styled";



export const Phonebook = () => {
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
          <Contacts

          // onDeleteContact={handleDeleteContact}
          />
        </Section>
      </Loader>
    </Container>
  );
};