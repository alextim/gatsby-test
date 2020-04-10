import styled from '@emotion/styled';
import { Link } from '@chakra-ui/core';

const BtnLink = styled(Link)`
  display: inline-block;
  height: auto;
  width: auto;
  min-width: 8.4375em;
  color: #fff;
  background-color: #ff7550;
  padding: 0.625em 1.25em;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  line-height: 1.8;
  border: none;
  cursor: pointer;
  transition: all .3s ease 0s;
  &:hover {
    color: #222;
    background-color: #fff;
    text-decoration: none;
    box-shadow: 0 2px 7px 0 rgba(162,160,160,.54);
  }

  ${(props) => props.theme.mediaQueries.md} {
    padding: 0.625em 2.1875em;
  }
`;

export default BtnLink;
