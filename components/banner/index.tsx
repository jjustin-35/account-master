'use client';

import Image from 'next/image';
import { Container } from '@/constants/styles/globalStyles';
import { Wrapper, Content, Title, Desc } from './styled';
import dataset from './data';

type Props = {
  variant: string;
};

const Banner = ({ variant }: Props) => {
  const data = dataset[variant];
  if (!data) return null;
  return (
    <Container>
      <Wrapper $isReverse={!!data.isReverse}>
        <Content>
          {data.title && (
            <Title
              {...data.title}
              dangerouslySetInnerHTML={{
                __html: data.title.text,
              }}
            />
          )}
          {data.desc && (
            <Desc
              {...data.desc}
              dangerouslySetInnerHTML={{
                __html: data.desc.text,
              }}
            />
          )}
        </Content>
        {data.image && <Image {...data.image} width={120} height={120} />}
      </Wrapper>
    </Container>
  );
};

export default Banner;
