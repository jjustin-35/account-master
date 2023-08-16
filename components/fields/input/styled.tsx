import styled from 'styled-components';
import colors from '@/constants/styles/colors';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
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
