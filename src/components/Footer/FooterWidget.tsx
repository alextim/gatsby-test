import React from 'react';
import styled from '@emotion/styled';

export interface IFooterWidget {
  title?: string;
  children: React.ReactNode;
}

const FooterWidget: React.FC<IFooterWidget> = ({ title, children }) => {
  const Title = styled.h3`
    color: ${(props) => props.theme.footer.colors.highlited};
    font-weight: ${(props) => props.theme.fontWeights.body};
    margin: 0 0 ${(props) => props.theme.space[3]}px;
    line-height: ${(props) => props.theme.lineHeights.heading};
    padding: 0;
    &:after {
      display: block;
      content: '';
      height: 2px;
      background: ${(props) => props.theme.footer.colors.widgetTitleUnderline};
      width: 2.5em;
      margin-top: ${(props) => props.theme.space[2]};
      margin-bottom: ${(props) => props.theme.space[4]};
    }
    ${(props) => props.theme.mediaQueries.md}: {
      font-size: 1.125rem;
    }
  `;

  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

export default FooterWidget;
