import React from 'react';
import kebabCase from 'lodash/kebabCase';

import SidebarWidget from '../../SidebarWidget';
import IconLink from '../../IconLink';
import useAllCategories from '../../../helpers/hooks/useAllCategories';

const PostCategories = () => {
  const cats = useAllCategories();
  const base = 'category';

  return cats ? (
    <SidebarWidget title="Рубрики">
      {cats.map((cat, i) => (
        <IconLink key={i} to={`/${base}/${kebabCase(cat)}`} icon={['far', 'folder-open']}>
          {cat}
        </IconLink>
      ))}
    </SidebarWidget>
  ) : null;
};

export default PostCategories;
