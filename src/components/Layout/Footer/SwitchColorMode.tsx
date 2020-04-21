import React from 'react';
import { Box, useColorMode } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box ml="1em" role="switch" aria-checked={colorMode === 'dark' ? 'true' : 'false'} onClick={toggleColorMode}>
      <FontAwesomeIcon
        icon={['far', 'moon']}
        size="sm"
        color="white"
        style={{ display: colorMode === 'dark' ? 'block' : 'none' }}
      />
      <FontAwesomeIcon
        icon="sun"
        size="sm"
        color="yellow"
        style={{ display: colorMode !== 'dark' ? 'block' : 'none' }}
      />
    </Box>
  );
};

export default SwitchColorMode;
