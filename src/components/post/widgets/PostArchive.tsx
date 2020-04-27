import React from 'react';

import siteConfig from '../../../data/site-config';
import useAllYYYYMM from '../../../helpers/hooks/useAllYYYYMM';
import postArchiveHelper from '../../../helpers/postArchiveHelper';
import SidebarWidget from '../../SidebarWidget';
import IconLink from '../../IconLink';

const PostArchive = () => {
  const dates = useAllYYYYMM();

  return dates ? (
    <SidebarWidget title="Ахивы">
      {dates.map((yyyymm, i) => {
        const title = postArchiveHelper.getTitle(yyyymm);
        const path = postArchiveHelper.getPath(yyyymm);

        return (
          <IconLink key={i} to={`${siteConfig.blogUrlBase}/${path}`} icon="paperclip">
            {title}
          </IconLink>
        );
      })}
    </SidebarWidget>
  ) : null;
};

export default PostArchive;
