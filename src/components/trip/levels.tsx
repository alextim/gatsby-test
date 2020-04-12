import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getFitnessLevelTitle, getTechLevelTitle } from './helpers';

interface IProps {
  icon: string;
  level: number;
  to: string;
  caption: string;
  title: string;
}

const Level: React.FC<IProps> = ({ icon, level, to, caption, title }) => {
  if (level < 1 || level > 4) {
    throw new Error(`Level (level < 1 || level > 4) level=${level}`);
  }
  const elements = [];
  for (let i = 0; i < level; i++) {
    elements.push(<FontAwesomeIcon icon={icon} color="red" />);
  }
  for (let i = level; i <= 4; i++) {
    elements.push(<FontAwesomeIcon icon={icon} />);
  }
  return (
    <div title={title}>
      {to ? <Link to={to}>{caption}</Link> : <span>{caption}</span>}
      {elements}
    </div>
  );
};

interface IProps {
  level: number;
}

const FitnessLevel: React.FC<IProps> = ({ level }) => (
  <Level icon="heart-beat" level={level} to="/fitness-level" caption="Фитнес" title={getFitnessLevelTitle(level)} />
);

const TechLevel: React.FC<IProps> = ({ level }) => (
  <Level icon="mountain" level={level} to="/technical-difficulty" caption="Сложность" title={getTechLevelTitle(level)} />
);

export { FitnessLevel, TechLevel };
