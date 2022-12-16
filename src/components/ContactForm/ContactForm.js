import { useState, useEffect } from 'react';

import {
  useAddContactsMutation,
  useGetContactQuery,
} from '../../redux/api/contactsApi';
import { MdAddIcCall } from 'react-icons/md';
import {
  Form,
  Text,
  LabelWrap,
  InputName,
  InputNumb,
  Button,
} from './ContactForm.styled';
import NotificationInfo from 'components/Notification/NotificationInfo';
import NotificationError from 'components/Notification/NotificationError';

export default function ContactForm() {
  const [addContacts, { isSuccess, error }] = useAddContactsMutation();
  const { data } = useGetContactQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameForAlert, setnameForAlert] = useState('');

  useEffect(() => {
    isSuccess && NotificationInfo(` ${nameForAlert} added to contact book`);
    error && NotificationError();
  }, [error, isSuccess, nameForAlert]);

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setnameForAlert(name);
    data.every(item => item.name.toLowerCase() !== name.toLowerCase())
      ? addContacts({
          name: name,
          number: number,
        })
      : NotificationInfo(name);
    setName('');
    setNumber('');
  };

  return (
    <>
      <Text>Add to contacts</Text>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <LabelWrap>
          <label>Name</label>
          <InputName
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="enter name"
          />
          <label>Number</label>
          <InputNumb
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="enter number"
          />
        </LabelWrap>
        <Button type="submit" disabled={number && name ? false : true}>
          <MdAddIcCall size="1.7rem" color="#efbad3" />
        </Button>
      </Form>
    </>
  );
}
