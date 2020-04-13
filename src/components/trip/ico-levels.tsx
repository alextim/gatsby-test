import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getFitnessLevelTitle, getTechLevelTitle } from './helpers';

interface ILevelProps {
  icon: string;
  level: number;
  to: string;
  caption: string;
  title: string;
}

const Level: React.FC<ILevelProps> = ({ icon, level, to, caption, title }) => {
  if (level < 1 || level > 4) {
    throw new Error(`Level (level < 1 || level > 4) level=${level}`);
  }

  const Icon = ({ color }) => (
    <Box as="span" mr="0.1rem">
      <FontAwesomeIcon icon={icon} color={color} />
    </Box>
  );

  const elements = [];
  for (let i = 0; i < level; i++) {
    elements.push(<Icon color="red" />);
  }
  for (let i = level; i <= 4; i++) {
    elements.push(<Icon />);
  }

  return (
    <Flex flexDirection="row" alignItems="center" title={title}>
      <Box mr="0.4rem">
        <Link to={to}>{caption}</Link>
      </Box>
      {elements}
    </Flex>
  );
};

interface IProps {
  level: number;
}

const FitnessLevel: React.FC<IProps> = ({ level }) => (
  <Level icon="heartbeat" level={level} to="/fitness-level" caption="Фитнес" title={getFitnessLevelTitle(level)} />
);

const TechLevel: React.FC<IProps> = ({ level }) => (
  <Level
    icon="mountain"
    level={level}
    to="/technical-difficulty"
    caption="Сложность"
    title={getTechLevelTitle(level)}
  />
);

export { FitnessLevel, TechLevel };
