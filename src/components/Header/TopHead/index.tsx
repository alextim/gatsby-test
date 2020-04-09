import React from 'react';
import styled from '@emotion/styled';

import SocialLinks from './SocialLinks';
import VoiceContacts from './VoiceContacts';
import PostalAddress from './PostalAddress';

const TopHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const TopHead = () => (
  <TopHeadWrapper>
    <SocialLinks />
    <VoiceContacts />
    <PostalAddress />
  </TopHeadWrapper>
);

export default TopHead;
