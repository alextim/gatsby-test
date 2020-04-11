import React from 'react';
import { Flex } from '@chakra-ui/core';

import Brand from './Brand';
import Burger from './Burger';
import Menu from './Menu';
import NavbarEnd from './NavbarEnd';
// import StrechedBackground from './../../Container';

// import './navbar.scss'

/* *
 * https://stackoverflow.com/questions/44154760/passing-states-between-components
 * https://www.pluralsight.com/guides/react-communicating-between-components
 * https://reactjs.org/docs/lifting-state-up.html
 *
 * */
const Navbar: React.FC = () => {
  const [isActive, setisActive] = React.useState(false);
  const handleToggle = () => setisActive(!isActive);

  return (
    <Flex
      as="nav"
      role="navigation"
      aria-label="main navigation"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
    >
      <Brand />
      <Burger handleToggleCallback={handleToggle} isActive={isActive} />
      <Menu isActive={isActive} />
      <NavbarEnd />
    </Flex>
  );
};

export default Navbar;
