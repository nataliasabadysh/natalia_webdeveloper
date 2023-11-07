import styled from 'styled-components';

export const StyledContainer = styled.div`
  gap: 20px;
  display: grid;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 26px;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 25px;
  }
`;

export const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
`;

export const StyledError = styled.div`
  font-size: 12px;
  line-height: 22px;
  color: rgb(251, 128, 128);
`;

export const StyledInput = styled.input`
  border-radius: 40px;
  min-height: 52px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  line-height: 28px;
  border: 1px solid blueviolet;
`;

export const StyledTextarea = styled.textarea`
  height: 88px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  line-height: 28px;
  padding-top: 20px;
  border-radius: 14px;
  border: 1px solid blueviolet;
`;

export const StyledButton = styled.button`
  font-size: 12px;
  padding: 12px 40px;
  line-height: 22px;
  text-transform: uppercase;
  width: 100%;
  border: 1px solid black;
`;
