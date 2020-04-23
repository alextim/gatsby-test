import React from 'react';

import SidebarWidget from '../../SidebarWidget';
import IconLink from '../../IconLink';
import useAllCategories from '../../../helpers/hooks/useAllCategories';
import { getTaxonomyByName } from '../../../helpers/taxonomy-helpers';

const PostCategories = () => {
  const cats = useAllCategories();
  const name = 'category';
  const tax = getTaxonomyByName(name);

  return cats ? (
    <SidebarWidget title="Рубрики">
      {cats.map((key, i) => (
        <IconLink key={i} to={`/${name}/${key}`} icon={['far', 'folder-open']}>
          {tax[key]}
        </IconLink>
      ))}
    </SidebarWidget>
  ) : null;
};

export default PostCategories;
