import React from 'react';

import SidebarWidget from '../SidebarWidget';
import { IconLink } from '../IconLink';
import useAllYYYYMM from './../../helpers/hooks/useAllYYYYMM';
import postArchiveHelper from './../../helpers/postArchiveHelper';

export default () => {
    const dates = useAllYYYYMM();
    const base = 'blog';
    const icon = 'paperclip';
    return dates ? 
        <SidebarWidget title="Ахивы">
        { 
            dates.map((yyyymm, i) => {
              const title = postArchiveHelper.getTitle(yyyymm);
              const path = postArchiveHelper.getPath(yyyymm);            

              return (
                <IconLink key={i} 
                    to={`/${base}/${path}`}
                    icon={icon}>
                    {title}
                </IconLink>
              );
            })
        }
        </SidebarWidget>
        : null;
};