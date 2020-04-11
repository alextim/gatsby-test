import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import mainMenuItems from '../../../data/mainMenuItems';

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
  ${(props) => props.theme.mediaQueries.md} {
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
  ${(props) => props.theme.mediaQueries.md} {
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

  ${(props) => props.theme.mediaQueries.md} {
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
  ${(props) => props.theme.mediaQueries.md} {
    position: relative;
    padding-right: 0;
    padding-left: 0.25em;
    background: transparent;
  }
`;

interface IMenuItem {
  title: string;
  url: string;
  submenu?: IMenuItem[];
}

const MenuItem: React.FC<IMenuItem> = ({ title, url }) => (
  <StyledLi>
    <Link to={url}>{title}</Link>
  </StyledLi>
);

interface IMenuItems {
  items: IMenuItem[];
}

const MenuItems = ({ items }: IMenuItems) =>
  items.map((item, i) => {
    /**
     *  https://eslint.org/docs/rules/no-prototype-builtins
     */
    // if (item.hasOwnProperty('submenu')) {
    if (Object.prototype.hasOwnProperty.call(item, 'submenu')) {
      return <MenuDropdown key={i} title={item.title} id={getId()} items={item.submenu} />;
    }

    return <MenuItem key={i} title={item.title} url={item.url} />;
  });

interface IMenuDropdown {
  title: string;
  id: string;
  items: Array<IMenuItem>;
}

const MenuDropdown: React.FC<IMenuDropdown> = ({ title, id, items }) => (
  <StyledLi>
    <StyledLabel htmlFor={id}>{title}</StyledLabel>
    <StyledCheckbox type="checkbox" id={id} />
    <StyledUl>
      <MenuItems items={items} />
    </StyledUl>
  </StyledLi>
);

export interface IMenu {
  isActive: boolean;
}

const Menu: React.FC<IMenu> = ({ isActive }) => {
  const StyledMenuWrap = styled.ul`
    display: ${isActive ? 'none' : 'block'};
    width: 100%;

    ${(props) => props.theme.mediaQueries.md} {
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
