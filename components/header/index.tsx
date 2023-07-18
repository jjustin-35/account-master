'use client';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import useWindowSize from '@/helpers/useWindowSize';

import { Container } from '@/helpers/styles/globalStyles';
import Button from '../button';
import MobileMenu from './mobileMenu';
import {
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  MenuGroup,
  BurgarMenuWrapper,
  ButtonGroup,
} from './styled';
import data from './data';

const BurgerMenu = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => (
  <BurgarMenuWrapper $isOpen={isOpen} onClick={onClick}>
    {[...Array.from({ length: 3 })].map((_, idx) => {
      return <span key={idx} />;
    })}
  </BurgarMenuWrapper>
);

const Header = () => {
  if (!data) return;
  const { data: user } = useSession();
  const buttonData = user ? data.signOutButtons : data.signInButtons;
  const [isBoxShadow, setIsBoxShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const isTablet = windowWidth < 1024;

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const authHandler = () => {
    if (user) {
      return signOut();
    }
    return signIn();
  };

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      return setIsBoxShadow(true);
    }
    return setIsBoxShadow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Container>
      <Wrapper $isBoxShadow={isBoxShadow}>
        <Link href="/">
          <Logo {...data.logo} />
        </Link>
        <MenuGroup>
          <Menu>
            {data.menu.map((item, idx) => (
              <MenuItem href={item.link} key={idx}>
                {item.text}
              </MenuItem>
            ))}
          </Menu>
          <ButtonGroup>
            {buttonData.map((item, idx) => (
              <Button key={idx} {...item} onClick={authHandler} />
            ))}
          </ButtonGroup>
          <BurgerMenu onClick={clickHandler} isOpen={isMenuOpen} />
        </MenuGroup>
      </Wrapper>
      {isTablet && <MobileMenu isMenuOpen={isMenuOpen} menu={data.menu} />}
    </Container>
  );
};

export default Header;
