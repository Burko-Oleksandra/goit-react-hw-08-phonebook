import React, { useState } from 'react';
import shortid from 'shortid';
import { FormWrap, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/slices/contactSlice';
import Notification from 'components/Notification';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  function handleInputChange(event) {
    const formValue = event.currentTarget.name;
    switch (formValue) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        throw new Error('Error');
    }
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const data = {
      id: shortid.generate(),
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      setName('');
      setNumber('');
      return Notification(data.name);
    }
    dispatch(addContact(data));
    resetForm();
  }

  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <FormWrap onSubmit={handleSubmitForm}>
      <Label htmlFor={nameInputId}>
        Name:
        <Input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number:
        <Input
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormWrap>
  );
}
