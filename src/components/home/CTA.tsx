import React from 'react';
import { useTheme } from '@chakra-ui/core';

import Section from './Section';

export interface ICTASettings {
  title: string;
  subTitle: string;
  text: string;
  buttons: {};
}

const CTA: React.FC<ICTASettings> = ({ settings }) => {
  const { title, subTitle, text, buttons } = settings;
  const theme = useTheme();

  return (
    <Section
      title={title}
      subTitle={subTitle}
      text={text}
      headingColor={theme.home.cta.colors.headingColor}
      color={theme.home.cta.colors.text}
      bg={theme.home.cta.colors.bg}
      buttons={buttons}
    />
  );
};

export default CTA;
