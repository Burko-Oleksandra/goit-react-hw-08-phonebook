import React, { Component } from 'react';
import shortid from 'shortid';
import contacts from '../components/contacts.json';

import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notification from './Notification';
import { Wrapper, Title, SubTitle, PhonebookWrap, Total } from './App.styled';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addNewContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const repeatContact = name.toLowerCase();
    if (
      this.state.contacts.find(contact =>
        contact.name.toLowerCase().includes(repeatContact)
      )
    ) {
      Notification(name);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <Wrapper>
        <PhonebookWrap>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addNewContact} />
        </PhonebookWrap>
        <PhonebookWrap>
          <SubTitle>Contacts</SubTitle>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContact}
            onDeleteContact={this.onDeleteContact}
          />
        </PhonebookWrap>
        <Total>Total contacts in the phonebook: {contacts.length}</Total>
      </Wrapper>
    );
  }
}

export default App;
