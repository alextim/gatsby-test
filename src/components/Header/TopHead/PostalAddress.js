import React from 'react';
import { Box } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

import useOrganization from '../../../helpers/hooks/useOrganization';

const StyledInlineFlex = styled.div`
    display: none;
    ${ props => props.theme.mediaQueries.md } {
      display: inline-flex;
      align-items: center;
      padding-bottom: 0.5em;
      padding-bottom: 0; 
    }
`;

const PostalAddress = () => {
    const { address } = useOrganization();
    const { streetAddress1, streetAddress2, city, country } = address;
    const nbsp = '\xa0';
    const addressInOneLine =
        streetAddress1 +
        ( streetAddress2 && nbsp + streetAddress2) +
        ( city && ',' + nbsp + city) +
        //( postalIndex && nbsp + postalIndex ) +
        ( country && ',' + nbsp + country );

    return (
      <StyledInlineFlex>
        <FontAwesomeIcon icon={['far', 'map']} size="sm"/>
        <Box ml="0.5em">{ addressInOneLine }</Box>
      </StyledInlineFlex>
    );
};

export default PostalAddress;