import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { Wrapper, Title, SubTitle, PhonebookWrap, Total } from './App.styled';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wrapper>
      <PhonebookWrap>
        <Title>Phonebook</Title>
        <ContactForm />
      </PhonebookWrap>
      <PhonebookWrap>
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactsList contacts={contacts} />
      </PhonebookWrap>
      <Total>Total contacts in the phonebook: {contacts.length}</Total>
    </Wrapper>
  );
}
