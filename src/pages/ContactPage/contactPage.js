import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getLoggedin } from '../../redux/slices/authSlice';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactsList';
import ContactForm from '../../components/ContactForm';
import imageBg from '../../images/contacts.png';
import { Wrap, Text } from './contactPage.styled';
import AppBar from 'components/AppBar/AppBar';

export default function ContactsView() {
  const isLoggedin = useSelector(getLoggedin);
  return (
    <Wrap imgUrl={imageBg}>
      {!isLoggedin && <Navigate to="/" />}
      {isLoggedin && <AppBar />}
      <ContactForm />
      <Filter />
      <Text>Your contacts</Text>
      <ContactList />
    </Wrap>
  );
}
