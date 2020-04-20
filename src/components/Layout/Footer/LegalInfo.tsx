import React from 'react';
import { Box } from '@chakra-ui/core';

import useOrganization from '../../../helpers/hooks/useOrganization';

const LegalInfo: React.FC = () => {
  const { name } = useOrganization();

  return (
    </*
      sx={{       textAlign: "center",
        [theme.mediaQueries.sm]: {
          justifyContent: "space-between",
        }
      }}
      */>
      <Box mx={2}>{`© ${new Date().getFullYear()} «${name}». Все права защищены.`}</Box>
      <Box mx="auto" />
    </>
  );
};

export default LegalInfo;
