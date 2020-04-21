import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { ITheme } from '../../../theme.d';

import mainMenuItems from '../../../../data/mainMenuItems';

let id = 0;

const getId = (): string => {
  ++id;
  return 'sm' + id.toString();
};

const StyledCheckbox = styled.input`
  display: none;
  &:checked + ul {
    display: block;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    &:checked + ul {
      display: none;
    }
  }
`;

const StyledLi = styled.li`
  display: block;
  position: relative;
  padding: 1em 1.5em;

  color: black;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: rgba(0, 0, 0, 0.05);

  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.125);
  transition: all 0.125s ease-in-out;

  &:hover {
    color: white;
    background-color: #ff7550;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    &:hover > input[type='checkbox'] + ul {
      display: block;
    }
    li {
      float: left;
      border-width: 0 1px 0 0;
    }
  }
`;

const StyledUl = styled.ul`
  display: none;

  margin: 0 1em;
  margin-top: 1em;

  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);

  border-width: 1px 1px 0;
  background-color: white;

  ul {
    li {
      color: black;
      &:last-child {
        border-width: 0;
      }
    }
  }

  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    position: absolute;
    top: 100%;
    left: 0;
    width: 12em;
    margin: 0;

    border-width: 0;
    z-index: 3000;

    ul {
      top: 0;
      left: 100%;
    }
    li {
      float: none;
      border-width: 0 0 1px;
    }
    label::after {
      content: '>';
      position: absolute;
      top: 0;
      right: 0;
      padding: 1em;
    }
  }
`;

const StyledLabel = styled.label`
  &::after {
    content: '▾';
    position: absolute;
    right: 0;
    top: 0;
    padding: 1em;

    font-size: 1em;
    text-align: center;
    color: rgba(255, 255, 255, 0.75);
    background-color: rgba(0, 0, 0, 0.125);
    text-shadow: 0 0 0 transparent;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    position: relative;
    padding-right: 0;
    padding-left: 0.25em;
    background: transparent;
  }
`;

interface IMenuItem {
  title: string;
  url: string;
  submenu?: Array<IMenuItem>;
}
type MenuDropdownProps = {
  title: string;
  id: string;
  items: Array<IMenuItem>;
};

type MenuItemsProps = {
  items: Array<IMenuItem>;
};

const MenuItem = ({ title, url }: IMenuItem) => (
  <StyledLi>
    <Link to={url}>{title}</Link>
  </StyledLi>
);

/**
 *  https://eslint.org/docs/rules/no-prototype-builtins
 */
// if (item.hasOwnProperty('submenu')) {
// if (item.submenu) {
// if (Object.prototype.hasOwnProperty.call(item, 'submenu')) {
const MenuItems = ({ items }: MenuItemsProps) =>
  items.map((item, i) =>
    item.submenu ? (
      <MenuDropdown key={i} title={item.title} id={getId()} items={item.submenu} />
    ) : (
      <MenuItem key={i} title={item.title} url={item.url} />
    ),
  );

const MenuDropdown = ({ title, id, items }: MenuDropdownProps) => (
  <StyledLi>
    <StyledLabel htmlFor={id}>{title}</StyledLabel>
    <StyledCheckbox type="checkbox" id={id} />
    <StyledUl>
      <MenuItems items={items} />
    </StyledUl>
  </StyledLi>
);

type Props = {
  isActive: boolean;
};
const Menu = ({ isActive }: Props) => {
  const StyledMenuWrap = styled.ul`
    display: ${isActive ? 'none' : 'block'};
    width: 100%;

    ${(props) => (props.theme as ITheme).mediaQueries.md} {
      display: flex;
      align-items: center;
      margin-left: auto;
      width: auto;
    }
  `;

  return (
    <StyledMenuWrap>
      <MenuItems items={mainMenuItems} />
    </StyledMenuWrap>
  );
};

export default Menu;
