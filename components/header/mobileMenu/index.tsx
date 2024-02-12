'use client';

import { SignInResponse } from 'next-auth/react';

import { ButtonType } from '@/constants/types/global';
import { Wrapper, Menu, MenuItem } from './styled';

type Props = {
  isMenuOpen: boolean;
  menu: {
    text: string;
    link: string;
  }[];
  buttons: ButtonType[];
  authHandler: () => Promise<SignInResponse>;
};

const MobileMenu = ({ isMenuOpen, menu, buttons, authHandler }: Props) => {
  return (
    <Wrapper $isMenuOpen={isMenuOpen}>
      <Menu>
        {menu.map((item, idx) => (
          <MenuItem href={item.link} key={idx}>
            {item.text}
          </MenuItem>
        ))}
        {buttons.map((item, idx) => (
          <MenuItem key={idx} onClick={authHandler}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default MobileMenu;
