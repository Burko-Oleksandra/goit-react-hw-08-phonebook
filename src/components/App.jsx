import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import contactsBook from '../components/contacts.json';

import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notification from './Notification';
import { Wrapper, Title, SubTitle, PhonebookWrap, Total } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? contactsBook
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function onDeleteContact(contactId) {
    return setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  }

  function addNewContact({ name, number }) {
    const repeatContact = name.toLowerCase();
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(repeatContact)
      )
    ) {
      Notification(name);
    } else {
      setContacts(prevState => [contact, ...prevState]);
    }
  }

  function changeFilter(event) {
    setFilter(event.currentTarget.value.trim());
  }

  function getVisibleContact() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContact = getVisibleContact();

  return (
    <Wrapper>
      <PhonebookWrap>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addNewContact} />
      </PhonebookWrap>
      <PhonebookWrap>
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={visibleContact}
          onDeleteContact={onDeleteContact}
        />
      </PhonebookWrap>
      <Total>Total contacts in the phonebook: {contacts.length}</Total>
    </Wrapper>
  );
}

// class App extends Component {
//   state = {
//     contacts: contacts,
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   onDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   addNewContact = ({ name, number }) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     const repeatContact = name.toLowerCase();
//     if (
//       this.state.contacts.find(contact =>
//         contact.name.toLowerCase().includes(repeatContact)
//       )
//     ) {
//       Notification(name);
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [newContact, ...contacts],
//       }));
//     }
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContact = this.getVisibleContact();

//     return (
//       <Wrapper>
//         <PhonebookWrap>
//           <Title>Phonebook</Title>
//           <ContactForm onSubmit={this.addNewContact} />
//         </PhonebookWrap>
//         <PhonebookWrap>
//           <SubTitle>Contacts</SubTitle>
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactsList
//             contacts={visibleContact}
//             onDeleteContact={this.onDeleteContact}
//           />
//         </PhonebookWrap>
//         <Total>Total contacts in the phonebook: {contacts.length}</Total>
//       </Wrapper>
//     );
//   }
// }

// export default App;
