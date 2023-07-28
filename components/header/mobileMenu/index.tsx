'use client';

import { Wrapper, Menu, MenuItem } from './styled';

type Props = {
  isMenuOpen: boolean;
  menu: {
    text: string;
    link: string;
  }[];
};

const MobileMenu = ({ isMenuOpen, menu }: Props) => {
  return (
    <Wrapper $isMenuOpen={isMenuOpen}>
      <Menu>
        {menu.map((item, idx) => (
          <MenuItem href={item.link} key={idx}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default MobileMenu;
