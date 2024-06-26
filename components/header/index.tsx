'use client';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import useWindowSize from '@/helpers/useWindowSize';

import { Container } from '@/constants/styles/globalStyles';
import { deviceSize } from '@/constants/styles/breakpoints';
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

export type HeaderType = 'normal' | 'app';

interface BugerMenuProps {
  onClick: () => void;
  isOpen: boolean;
  type: HeaderType;
}

const BurgerMenu = ({ onClick, isOpen, type }: BugerMenuProps) => (
  <BurgarMenuWrapper $isOpen={isOpen} $type={type} onClick={onClick}>
    {[...Array.from({ length: 3 })].map((_, idx) => {
      return <span key={idx} />;
    })}
  </BurgarMenuWrapper>
);

const Header = ({ type = 'normal' }: { type?: HeaderType }) => {
  if (!data) return;
  const { data: user } = useSession();
  const buttonData = user ? data.signOutButtons : data.signInButtons;
  const [isBoxShadow, setIsBoxShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const isTablet = windowWidth < deviceSize.tablet;

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
        {type === 'normal' && (
          <Link href="/">
            <Logo {...data.logo} />
          </Link>
        )}
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
          <BurgerMenu type={type} onClick={clickHandler} isOpen={isMenuOpen} />
        </MenuGroup>
      </Wrapper>
      {isTablet && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          menu={data.menu}
          buttons={buttonData}
          authHandler={authHandler}
        />
      )}
    </Container>
  );
};

export default Header;
