import styled from '@emotion/styled';

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  ${props => props.theme.mediaQueries.md} {
    padding-right: 1rem;
    width: 50%;
  }
  ${props => props.theme.mediaQueries.lg} {
    width: 30%;
  }
`;

export const RightWrapper = styled.div`
  width: 100%;
  ${props => props.theme.mediaQueries.md} {
    width: 50%;
  }
  ${props => props.theme.mediaQueries.lg} {
    width: 70%;
  }
`;
