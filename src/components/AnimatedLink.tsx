import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = () => (
  <div>
    <FontAwesomeIcon className="fa-hover-hidden" icon="long-arrow-alt-right" size="xs" />
    <FontAwesomeIcon className="fa-hover-show" icon="check" size="xs" />
  </div>
);

interface IProps {
  children: React.ReactNode;
  to: string;
  cn?: string;
  end: boolean;
  mb?: string | number | [];
}

const AnimatedLink: React.FC<IProps> = ({ children, to, cn, mb, end = false }) => (
  <Flex direction="row" className="fa-hover" mb={mb}>
    {!end && <Icons />}
    <Link className={cn} to={to}>
      <Box pl={!end ? '0.3em' : '0'} pr={end ? '0.3em' : '0'}>
        {children}
      </Box>
    </Link>
    {end && <Icons />}
  </Flex>
);

export default AnimatedLink;
