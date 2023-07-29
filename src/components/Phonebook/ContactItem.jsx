// import React from 'react';
// import PropTypes from 'prop-types';
// import { Item } from './Phonebook.styled';

// const ContactItem = ({ id, name, number, children }) => {
//   return (
//     <Item>
//       &#8226; {name} {number}
//       {children}
//     </Item>
//   );
// };

// export default ContactItem;

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

import React from 'react';
import PropTypes from 'prop-types';
import { Item, DeleteBtn } from './Phonebook.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      &#8226; {name} {number}
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.elementType.isRequired,
};
