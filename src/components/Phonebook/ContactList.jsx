import React from 'react';
import { Item, DeleteBtn } from './Phonebook.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        &#8226; {name} {number}
        <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </Item>
    ))}
  </ul>
);

export default ContactList;
