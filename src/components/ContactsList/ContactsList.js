import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Item, Button, Text } from './ContactsList.styled';
import { deleteContact } from '../../redux/slices/contactSlice';

const getVisibleContacts = (contacts, filteredString) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredString.toLowerCase())
  );

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filteredString);

  const deleteContactById = contactId => () =>
    dispatch(deleteContact(contactId));
  const contactsList = getVisibleContacts(contacts, filter);

  return (
    <List>
      {contactsList.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name} {number}
          </Text>
          <Button type="button" onClick={deleteContactById(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}
