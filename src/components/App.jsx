import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Phonebook';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';
import {
  Container,
  FormTitle,
  ContactsTitle,
} from './Phonebook/Phonebook.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    this.addContact({ name, number });
  };

  addContact = ({ name, number }) => {
    const contactId = nanoid(5);

    const newContact = {
      id: contactId,
      name,
      number,
    };

    const contactName = this.state.contacts.map(contact => contact.name);

    if (contactName.includes(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = e => this.setState({ filter: e.currentTarget.value });

  render() {
    const { contacts, filter } = this.state;
    const { formSubmitHandler, changeFilter, deleteContact } = this;

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <FormTitle>Phonebook</FormTitle>
        <Form onSubmit={formSubmitHandler} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onFilterChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }
}

export default App;
