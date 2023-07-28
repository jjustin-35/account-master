import styled from 'styled-components';
import colors from '@/helpers/styles/colors';

export const InputWrapper = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 2px;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border: 1px solid ${colors.primary};
  }
`;
