import { Container } from '@/constants/styles/globalStyles';
import dataset from './data';
import Button from '../button';
import { Wrapper, Slogan, ButtonWrapper } from './styled';

interface Props {
  type: string;
}

const CtaBanner = ({ type }: Props) => {
  const data = dataset[type];
  return (
    <Wrapper type={type}>
      <Container>
        <Slogan
          type={type}
          dangerouslySetInnerHTML={{
            __html: data.title,
          }}
        />
        <ButtonWrapper>
          <Button {...data.button} />
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default CtaBanner;
