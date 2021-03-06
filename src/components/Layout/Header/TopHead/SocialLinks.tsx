import React from 'react';
import styled from '@emotion/styled';

import SocialLink from './SocialLink';
import Utils from '../../../../lib/utils';
import useSocialLinks from '../../../../helpers/hooks/useSocialLinks';

import { ITheme } from '../../../theme.d';

const SocialLinks = () => {
  const socialLinks = useSocialLinks();

  const StyledFlex = styled.div`
    display: none;
    ${(props) => (props.theme as ITheme).mediaQueries.md} {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: auto;
    }
  `;

  return (
    <StyledFlex>
      {socialLinks.map((item, i) => (
        <SocialLink
          key={i}
          icon={item.icon}
          name={Utils.upperFirst(item.key)}
          url={item.url}
          color={item.color}
          text={item.text}
        />
      ))}
    </StyledFlex>
  );
};

export default SocialLinks;
