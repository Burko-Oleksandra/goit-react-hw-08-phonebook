import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/slices/contactSlice';
import { deleteFetchContact } from '../../redux/thunks';
import { useScrollbar } from 'components/useScrollbar';
import {
  List,
  Item,
  Button,
  Name,
  Text,
  InfoWrap,
} from './ContactsList.styled';

const getVisibleContacts = (contacts, filteredString) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredString.toLowerCase())
  );

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filteredString);
  const contactsWrap = useRef(null);
  const hasScroll = contacts.length > 2;

  useScrollbar(contactsWrap, hasScroll);

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
    dispatch(deleteFetchContact(contactId));
  };

  const contactsList = getVisibleContacts(contacts, filter);

  return (
    <div
      style={{
        height: hasScroll ? '200px' : 'auto',
        minHeight: '200px',
        marginTop: '20px',
      }}
      ref={contactsWrap}
    >
      <List>
        {contactsList.map(({ id, name, number }) => (
          <>
            <Item key={id}>
              <InfoWrap>
                <Name>{name}</Name>
                <Text>{number}</Text>
              </InfoWrap>
              <Button type="button" onClick={() => deleteContactById(id)}>
                Delete
              </Button>
            </Item>
          </>
        ))}
      </List>
    </div>
  );
}
