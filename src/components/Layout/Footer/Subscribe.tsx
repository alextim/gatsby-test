import React from 'react';
import styled from '@emotion/styled';

import SubscribeForm from '../../forms/SubscribeForm';

const StyledDiv = styled.div`
  margin-bottom: 1rem;
`;

const Subscribe: React.FC = () => (
  <>
    <StyledDiv>Будьте в курсе наших последних новостей и актуальных предложений!</StyledDiv>
    <SubscribeForm />
  </>
);

export default Subscribe;
