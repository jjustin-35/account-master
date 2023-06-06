'use client';

import Link from 'next/link';
import { Wrapper } from './styled';

type Props = {
  text: string;
  link?: string;
  btnTheme?: string;
  size?: string;
  round?: string;
  onClick?: () => void;
};

const Button = ({ text, link, btnTheme, size, round, onClick }: Props) => {
  const isExternal = link?.startsWith('http');
  if (!isExternal && link) {
    return (
      <Link href={link} legacyBehavior>
        <Wrapper $btnTheme={btnTheme} $size={size} $round={round}>
          <span>{text}</span>
        </Wrapper>
      </Link>
    );
  }
  if (isExternal) {
    return (
      <Wrapper
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        $btnTheme={btnTheme}
        $size={size}
        $round={round}
      >
        <span>{text}</span>
      </Wrapper>
    );
  }
  return (
    <Wrapper $btnTheme={btnTheme} $size={size} $round={round} onClick={onClick}>
      <span>{text}</span>
    </Wrapper>
  );
};

export default Button;
