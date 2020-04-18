import styled from '@emotion/styled';

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LeftWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => props.theme.mediaQueries.md} {
    width: 50%;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => props.theme.mediaQueries.md} {
    width: 50%;
  }
`;
const PriceWrapper = styled.div`
  margin: 0 1.875rem 1.25rem;
  font-size: 1.375rem;
  font-weight: 700;
`;
const MetaWrapper = styled.div`
  padding: 0.625rem;
  border: 1px solid hsla(0, 0%, 87.1%, 0.49);
  border-radius: 0.3125rem;
`;

const MetaItem = styled.div`
  display: block;
  width: 100%;
  position: relative;
  margin-right: -0.25em;
  padding: 0 10px 10px 15px;
  vertical-align: top;
  margin-top: 10px;
  font-size: 16px;
  text-align: left;
  :after {
    content: '';
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 0;
    height: 1px;
    background: hsla(0, 0%, 87.1%, 0.32);
  }
  ${(props) => props.theme.mediaQueries.lg} {
    display: inline-block;
    width: 50%;
  }
`;

const BookWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.25rem 1.875rem 0;
`;

const DatesBookWrapper = styled.div`
  margin-right: 0.9375rem;
  margin-bottom: 1.25rem;
`;

const BodyWrapper = styled.div`
  margin-bottom: 1rem;
`;

export {
  HeadWrapper,
  LeftWrapper,
  RightWrapper,
  PriceWrapper,
  MetaWrapper,
  MetaItem,
  BookWrapper,
  DatesBookWrapper,
  BodyWrapper,
};
