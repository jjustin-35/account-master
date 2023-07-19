'use client';

import { Wrapper, Item, IconWrapper, Text } from './styled';
import dataset from './data';

interface Props {
  variant: string;
}

const IconGroup = ({ variant }: Props) => {
  const data = dataset[variant];
  return (
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
  );
};

export default IconGroup;
