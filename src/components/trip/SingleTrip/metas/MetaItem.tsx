import styled from '@emotion/styled';
import { ITheme } from '../../../theme.d';

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
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    display: inline-block;
    width: 50%;
  }
`;

export default MetaItem;
