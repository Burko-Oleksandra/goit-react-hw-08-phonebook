import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button, Text } from './ContactsList.styled';

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name} {number}
          </Text>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
