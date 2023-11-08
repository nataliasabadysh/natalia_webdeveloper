import React, { useState } from 'react';
import { SelectStyles, StyledFormRow, StyledLabel } from './Select.styles'; // The file where you've saved the styled components

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Select = ({ label, ...props }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <StyledFormRow>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <SelectStyles
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </StyledFormRow>
  );
};

export default Select;
