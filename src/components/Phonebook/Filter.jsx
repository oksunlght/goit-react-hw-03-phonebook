import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, Input } from './Phonebook.styled';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <InputLabel>
      Find contacts by name
      <Input type="text" value={filter} onChange={onFilterChange} />
    </InputLabel>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.elementType.isRequired,
};
