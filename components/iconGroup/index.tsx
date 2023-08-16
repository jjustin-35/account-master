'use client';

import { Wrapper, Item, IconWrapper, Text } from './styled';
import { Container } from '@/constants/styles/globalStyles';
import dataset from './data';

interface Props {
  variant: string;
}

const IconGroup = ({ variant }: Props) => {
  const data = dataset[variant];
  if (!data) return;
  return (
    <Container>
      <Wrapper>
        {data.map((item, idx) => (
          <Item key={idx}>
            <IconWrapper>
              <img {...item.image} />
            </IconWrapper>
            <Text>{item.text}</Text>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default IconGroup;
