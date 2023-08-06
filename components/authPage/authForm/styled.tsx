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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HorizonLineWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin: 16px 0;

  span {
    display: inline-block;
    margin: 0 auto;
    padding: 0 8px;
    background-color: #ffffff;
    color: ${colors.dark};
    font-size: 14px;
    font-weight: 500;
  }

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    transform: translateY(-50%);
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.dark};
  }
`;
