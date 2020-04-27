import React from 'react';

import useAllCategories from '../../../helpers/hooks/useAllCategories';
import { getTaxUrlAndNames } from '../../../helpers/taxonomy-helpers';
import SidebarWidget from '../../SidebarWidget';
import IconLink from '../../IconLink';

const PostCategories = () => {
  const items = getTaxUrlAndNames('category', useAllCategories());

  return items ? (
    <SidebarWidget title="Рубрики">
      {items.map((item, i) => (
        <IconLink key={i} to={item.url} icon={['far', 'folder-open']}>
          {item.name}
        </IconLink>
      ))}
    </SidebarWidget>
  ) : null;
};

export default PostCategories;
