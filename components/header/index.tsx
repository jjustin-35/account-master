'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import Button from '../button';
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

const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => (
  <BurgarMenuWrapper isOpen={isOpen}>
    {[...Array.from({ length: 3 })].map((_, idx) => {
      return <span key={idx} />;
    })}
  </BurgarMenuWrapper>
);

const Header = () => {
  if (!data) return;
  const { data: session } = useSession();
  const buttonData = session ? data.signOutButton : data.signInButton;
  const [isBoxShadow, setIsBoxShadow] = useState(false);

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
    <Wrapper isBoxShadow={isBoxShadow}>
      <Logo {...data.logo} />
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
            <Button key={idx} {...item} />
          ))}
        </ButtonGroup>
      </MenuGroup>
    </Wrapper>
  );
};

export default Header;
