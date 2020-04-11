import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
  margin: 0 0 50px 0;
  padding: 25px;
  box-shadow: 0 0 31px #efefef;
`;

const Heading = styled.h2`
  position: relative;
  font-weight: 500;
  font-size: 22px;
  display: block;
  margin-bottom: 25px;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 10px;
  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background: #ff7550;
    position: absolute;
    bottom: -1px;
  }
`;

interface IProps {
  children: React.ReactNode;
  title: string;
}

const SidebarWidget: React.FC<IProps> = ({ children, title }) => (
  <Wrapper>
    <Heading>{title}</Heading>
    {children}
  </Wrapper>
);

export default SidebarWidget;
