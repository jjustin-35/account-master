import styled from 'styled-components';
import colors from '@/helpers/styles/colors';

export const Wrapper = styled.div`
  padding: 20px;
  border: 2px solid ${colors.primary};
  border-radius: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;