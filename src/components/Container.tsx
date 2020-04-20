import styled from '@emotion/styled';

import { ITheme } from './theme.d';

const ContainerFullWidth = styled.div`
  min-width: ${(props) => (props.theme as ITheme).sizes.container.min}px;
  max-width: ${(props) => (props.theme as ITheme).sizes.container.max}px;
  margin: 0 auto;
`;

const Container = styled(ContainerFullWidth)`
  padding: 0 1em;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    padding: 0 1.5em;
  }
`;

const StrechedBackground = styled.div`
  padding-left: -1em;
  padding-right: -1em;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    padding-left: -1.5em;
    padding-right: -1.5em;
  }
`;

export { ContainerFullWidth, Container, StrechedBackground };
