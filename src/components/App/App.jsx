import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/thunks/index';
import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import Loader from 'components/Loader';
import './App.css';
import {
  Wrapper,
  ContactWrap,
  Title,
  SubTitle,
  PhonebookWrap,
  Total,
} from './App.styled';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const status = useSelector(state => state.contacts.status);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {status === 'loading' ? <Loader /> : ''}
      {error && <h2>An error occured: {error}</h2>}
      {!error && (
        <Wrapper className="App">
          <PhonebookWrap>
            <Title>Phonebook</Title>
            <ContactForm />
          </PhonebookWrap>
          <ContactWrap>
            <SubTitle>Contacts</SubTitle>
            <Filter />
            <ContactsList contacts={contacts} />
          </ContactWrap>
          <Total>Total contacts in the phonebook: {contacts.length}</Total>
        </Wrapper>
      )}
    </>
  );
}
