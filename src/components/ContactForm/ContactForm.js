import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FormWrap, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameImputId = shortid.generate();
  const numberImputId = shortid.generate();

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
    onSubmit({ name, number });
    resetForm();
  }

  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <FormWrap onSubmit={handleSubmitForm}>
      <Label htmlFor={nameImputId}>
        Name:
        <Input
          type="text"
          name="name"
          id={nameImputId}
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberImputId}>
        Number:
        <Input
          type="tel"
          name="number"
          id={numberImputId}
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

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameImputId = shortid.generate();
//   numberImputId = shortid.generate();

//   handleInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmitForm = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <FormWrap onSubmit={this.handleSubmitForm}>
//         <Label htmlFor={this.nameImputId}>
//           Name:
//           <Input
//             type="text"
//             name="name"
//             id={this.nameImputId}
//             value={name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label htmlFor={this.numberImputId}>
//           Number:
//           <Input
//             type="tel"
//             name="number"
//             id={this.numberImputId}
//             value={number}
//             onChange={this.handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </FormWrap>
//     );
//   }
// }

// export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
