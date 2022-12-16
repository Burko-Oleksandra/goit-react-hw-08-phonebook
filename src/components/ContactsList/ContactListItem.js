import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDeleteContactsMutation } from '../../redux/api/contactsApi';
import { MdDelete } from 'react-icons/md';
import { Item, Button } from './ContactListItem.styled';
import NotificationRemoved from 'components/Notification/NotificationDelete';
import NotificationError from 'components/Notification/NotificationError';

export default function ContactListItem({ name, number, id }) {
  const [deleteContacts, { isLoading: isDeleting, isSuccess, error }] =
    useDeleteContactsMutation();

  useEffect(() => {
    isSuccess && NotificationRemoved(name);
    error && NotificationError();
  }, [isSuccess, name, error]);

  return (
    <Item key={id}>
      {name} {number}
      <Button
        type="button"
        onClick={() => deleteContacts(id)}
        disabled={isDeleting}
      >
        <MdDelete />
      </Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
