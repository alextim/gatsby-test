import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    padding-right: 1rem;
    width: 50%;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 30%;
  }
`;

export const RightWrapper = styled.div`
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    width: 50%;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 70%;
  }
`;
