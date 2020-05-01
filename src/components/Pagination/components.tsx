import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

const PaginationWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  width: 80%;
  max-width: 48em;
  padding: 1.5625em 0;
  margin: 0 auto;
`;

const NavSqr = styled.div`
  display: inline-block;
  margin: 0.3125em;
  padding: 0.375em 1.125em;
  color: #242729;
  background: #f5f5f5;
  &:hover {
    color: #fff;
    background: #ff7550;
    cursor: pointer;
  }
`;
const CurrentPageSqr = styled(NavSqr)`
  border: 1px solid black;
`;

const NavBtn = styled(Link)`
  display: inline-block;
  margin: 0.3125em;
  padding: 0.375em 1.125em;
  color: #242729;
  background: #f5f5f5;
  &:hover {
    color: #fff;
    background: #ff7550;
  }
`;

const CurrentPageBtn = styled(NavBtn)`
  border: 1px solid black;
`;

const Arrow = styled(Box)`
  display: inline-block;
  margin-bottom: 2px;
  padding: 2px;
  border: solid;
  border-width: 0 2px 2px 0;
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
`;

const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
`;

export { PaginationWrapper, NavBtn, CurrentPageBtn, NavSqr, CurrentPageSqr, ArrowLeft, ArrowRight };
