import React from 'react';
import { useField } from 'formik';
import {
  StyledFormRow,
  StyledLabel,
  StyledInput,
  StyledError,
} from './Input.styles'; // The file where you've saved the styled components

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledFormRow>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
      ) : null}
    </StyledFormRow>
  );
};

export default Input;
