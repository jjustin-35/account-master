import IntroBanner from '../introBanner';
import { Container } from '@/helpers/styles/globalStyles';
import { Wrapper } from './styled';
import dataset from './data';

const IntroBannerGroup = ({ variant }) => {
  const data = dataset[variant];
  return (
    <Container>
      <Wrapper>
        {data.map((item, idx) => (
          <IntroBanner {...item} variant={variant} key={idx} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default IntroBannerGroup;
