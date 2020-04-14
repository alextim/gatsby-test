import React from 'react';

import Banner from '../Banner';
import AsideLayout from './AsideLayout';

interface IProps {
  title: string;
  img: any;
}

const PageLayout: React.FC<IProps> = ({ title, img, children }) => {
  return (
    <AsideLayout widgets="hello" header={<Banner img={img} title={title} />}>
      {children}
    </AsideLayout>
  );
};

export default PageLayout;
