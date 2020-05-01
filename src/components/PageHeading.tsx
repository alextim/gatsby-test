import styled from '@emotion/styled';
import { ITheme } from './theme.d';

const PageHeading = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    font-size: 2rem;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    font-size: 3rem;
  }
`;

export default PageHeading;
