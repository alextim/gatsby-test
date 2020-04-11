import React from 'react';
import { useTheme } from '@chakra-ui/core';

import Section from './Section';
import { ICTASettings } from '../../types/homePageTypes';

const CTA: React.FC<ICTASettings> = ({ settings }) => {
  const { title, subTitle, text, actions } = settings;
  const theme = useTheme();

  return (
    <Section
      title={title}
      subTitle={subTitle}
      text={text}
      headingColor={theme.home.cta.colors.headingColor}
      color={theme.home.cta.colors.text}
      bg={theme.home.cta.colors.bg}
      actions={actions}
    />
  );
};

export default CTA;
