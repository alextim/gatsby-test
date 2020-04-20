import React from 'react';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

export interface IFooterWidget {
  title?: string;
  children: React.ReactNode;
}

const FooterWidget: React.FC<IFooterWidget> = ({ title, children }) => {
  const Title = styled.h3`
    color: ${(props) => (props.theme as ITheme).footer.colors.highlited};
    font-weight: ${(props) => (props.theme as ITheme).fontWeights.body};
    margin: 0 0 ${(props) => (props.theme as ITheme).space[3]}px;
    line-height: ${(props) => (props.theme as ITheme).lineHeights.heading};
    padding: 0;
    &:after {
      display: block;
      content: '';
      height: 2px;
      background: ${(props) => (props.theme as ITheme).footer.colors.widgetTitleUnderline};
      width: 2.5em;
      margin-top: ${(props) => (props.theme as ITheme).space[2]};
      margin-bottom: ${(props) => (props.theme as ITheme).space[4]};
    }
    ${(props) => (props.theme as ITheme).mediaQueries.md}: {
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
