import styled from 'styled-components';
import Select from 'react-select';

export const SelectStyles = styled(Select)`
  border-radius: 40px;
  min-height: 52px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  line-height: 28px;
  border: 1px solid blueviolet;
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
