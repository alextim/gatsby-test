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
  max-width: 770px;
  padding: 25px 0;
  margin: 0px auto;
`;

const NavSqr = styled.div`
  padding: 6px 18px;
  color: #242729;
  display: inline-block;
  background: #f5f5f5;
  margin: 5px;
  &:hover {
    background: #ff7550;
    color: #fff;
  }
`;
const CurrentPageSqr = styled(NavSqr)`
  border: 1px solid black;
`;

const NavBtn = styled(Link)`
  padding: 6px 18px;
  color: #242729;
  display: inline-block;
  background: #f5f5f5;
  margin: 5px;
  &:hover {
    background: #ff7550;
    color: #fff;
  }
`;

const CurrentPageBtn = styled(NavBtn)`
  border: 1px solid black;
`;

const Arrow = styled(Box)`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  margin-bottom: 2px;
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
`;

const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
`;

export { PaginationWrapper, NavBtn, CurrentPageBtn, NavSqr, CurrentPageSqr, ArrowLeft, ArrowRight };
