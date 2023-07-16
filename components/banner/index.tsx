'use client';

import { Container } from '@/constants/styles';
import { Outer, Wrapper, Content, Title, Desc, Image } from './styled';
import dataset from './data';

type Props = {
  variant: string;
};

const Banner = ({ variant }: Props) => {
  const data = dataset[variant];
  if (!data) return null;
  return (
    <Outer>
      <Container>
        <Wrapper>
          <Content>
            {data.title && (
              <Title
                dangerouslySetInnerHTML={{
                  __html: data.title,
                }}
              />
            )}
            {data.desc && (
              <Desc
                dangerouslySetInnerHTML={{
                  __html: data.desc,
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
    </Outer>
  );
};

export default Banner;
