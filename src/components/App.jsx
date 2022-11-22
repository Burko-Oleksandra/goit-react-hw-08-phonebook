import React, { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';
import contacts from '../components/contacts.json';
import Phonebook from './Phonebook';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { Wrapper, Title, SubTitle, PhonebookWrap, Total } from './App.styled';

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

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
      Notiflix.Report.info(
        `${name} is already in contacts`,
        'Check the correct entry!',
        'Ok',
        {
          width: '500px',
          backgroundColor: '#e6e6fa',
          borderRadius: '16px',
          titleFontSize: '32px',
          messageFontSize: '24px',
          buttonFontSize: '35px',
          cssAnimationStyle: 'zoom',

          info: {
            svgColor: '#483d8b',
            titleColor: '#483d8b',
            messageColor: '#000000',
            buttonBackground: 'rgba(72,61,139,0.8)',
            buttonColor: '#000000',
            backOverlayColor: 'rgba(72,61,139,0.5)',
          },
        }
      );
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
          <Phonebook
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
