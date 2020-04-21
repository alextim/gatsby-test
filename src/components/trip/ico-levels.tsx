import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

import { LevelType } from './trip';
import { getFitnessLevelTitle, getTechLevelTitle } from './helpers';

type LevelProps = {
  icon: IconName | [IconPrefix, IconName];
  level: LevelType;
  to: string;
  caption: string;
  title: string;
};

type IconProps = {
  icon: IconName | [IconPrefix, IconName];
  color?: string;
};
const Icon = ({ icon, color }: IconProps) => (
  <Box as="span" mr="0.1rem">
    <FontAwesomeIcon icon={icon} color={color} />
  </Box>
);

const Level = ({ icon, level, to, caption, title }: LevelProps) => {
  const MAX_LEVEL = 4;
  const elements = [];
  const numLevel = (level as unknown) as number;
  let j = 0;
  for (let i = 1; i <= numLevel; i++) {
    elements.push(<Icon key={j++} icon={icon} color="red" />);
  }
  for (let i = numLevel; i < MAX_LEVEL; i++) {
    elements.push(<Icon key={j++} icon={icon} />);
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

type Props = {
  level: LevelType;
};

const FitnessLevel = ({ level }: Props) => (
  <Level icon="heartbeat" level={level} to="/fitness-level" caption="Фитнес" title={getFitnessLevelTitle(level)} />
);

const TechLevel = ({ level }: Props) => (
  <Level
    icon="mountain"
    level={level}
    to="/technical-difficulty"
    caption="Сложность"
    title={getTechLevelTitle(level)}
  />
);

export { FitnessLevel, TechLevel };
