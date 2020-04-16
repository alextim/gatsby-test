import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LevelType } from '../../types/trip-types';
import { getFitnessLevelTitle, getTechLevelTitle } from './helpers';

interface ILevelProps {
  icon: string;
  level: LevelType;
  to: string;
  caption: string;
  title: string;
}

const Level: React.FC<ILevelProps> = ({ icon, level, to, caption, title }) => {
  const MAX_LEVEL = 4;
  const Icon = ({ color }) => (
    <Box as="span" mr="0.1rem">
      <FontAwesomeIcon icon={icon} color={color} />
    </Box>
  );

  const elements = [];
  const numLevel = Number(level);
  for (let i = 1; i <= numLevel; i++) {
    elements.push(<Icon color="red" />);
  }
  for (let i = numLevel; i < MAX_LEVEL; i++) {
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
  level: LevelType;
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
