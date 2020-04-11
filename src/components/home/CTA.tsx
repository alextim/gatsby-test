import React from 'react';
import { useTheme } from '@chakra-ui/core';

import Section from './Section';
import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';

const CTA: React.FC = () => {
  const { CTA } = useHomePageSettings();
  const { title, subTitle, text, actions } = CTA;
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
