import styled from 'styled-components';
import { Formik } from 'formik';

export const Container = styled.div`
  gap: 20px;
  display: grid;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

export const Title = styled.h3`
  font-size: 26px;

  @media (min-width: 768px) {
    font-size: 34px;
    line-height: 1;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 25px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
`;

export const Error = styled.div`
  font-size: 12px;
  line-height: 22px;
  color: rgb(251, 128, 128);
`;

// Reuse this styled component for both input and textarea by passing as prop 'as'
export const Input = styled.input`
  border-radius: 40px;
  min-height: 52px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  line-height: 28px;
  border: 1px solid blueviolet;

  // If 'as' prop is textarea, apply these styles
  ${props =>
    props.as === 'textarea' &&
    `
    height: 88px;
    padding-top: 20px;
    border-radius: 14px;
  `}
`;
