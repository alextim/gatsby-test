import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IService } from '../../types/trip-types';
// import { IconLink } from '../IconLink';

interface IProps {
  service: IService;
}

const Service: React.FC<IProps> = ({ service }) => {
  const { included, excluded, note } = service;

  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <h3>Включено</h3>
          {included.map((row, i) => (
            <IconText key={i} icon={['far', 'check-circle']} color="green">
              {row}
            </IconText>
          ))}
        </LeftWrapper>
        <RightWrapper>
          <h3>Не включено</h3>
          {excluded.map((row, i) => (
            <IconText key={i} icon={['far', 'circle']} color="red">
              {row}
            </IconText>
          ))}
        </RightWrapper>
      </Wrapper>
      {note && <div dangerouslySetInnerHTML={{ __html: note }} />}
    </>
  );
};

const Wrapper = styled.div`
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

interface IIconTextProps {
  icon: string | [string, string];
  color: string;
}
const IconText: React.FC<IIconTextProps> = ({ icon, color, children }) => (
  <Flex flexDirection="row" flexWrap="nowrap">
    <Box as="span" mr="0.4rem">
      <FontAwesomeIcon icon={icon} size="sm" color={color} />
    </Box>
    <span>{children}</span>
  </Flex>
);

export default Service;
