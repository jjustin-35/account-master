'use client';

import { ImageType } from '@/constants/types/global';
import { Wrapper, Content, Title, Desc, Image } from './styled';

interface Props {
  variant?: string;
  title?: string;
  desc?: string;
  image?: ImageType;
}

const IntroBanner = ({ variant, title, desc, image }: Props) => {
  return (
    <Wrapper>
      <Content>
        {title && <Title variant={variant}>{title}</Title>}
        {desc && <Desc variant={variant}>{desc}</Desc>}
      </Content>
      <Image>
        <img {...image} />
      </Image>
    </Wrapper>
  );
};

export default IntroBanner;
