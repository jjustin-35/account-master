import { useState, useRef } from 'react';

type Props = {
  isMenuOpen: boolean;
};

const Dropdown = ({ isMenuOpen }: Props) => {
  const [menuHeight, setMenuHeight] = useState(0);

  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  return <></>;
};

export default Dropdown;
