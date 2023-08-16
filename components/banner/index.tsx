'use client';

import { Container } from '@/constants/styles/globalStyles';
import { Wrapper, Content, Title, Desc, Image } from './styled';
import dataset from './data';

type Props = {
  variant: string;
};

const Banner = ({ variant }: Props) => {
  const data = dataset[variant];
  if (!data) return null;
  return (
    <Container>
      <Wrapper isReverse={!!data.isReverse}>
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
        {data.image && (
          <Image>
            <img {...data.image} />
          </Image>
        )}
      </Wrapper>
    </Container>
  );
};

export default Banner;
