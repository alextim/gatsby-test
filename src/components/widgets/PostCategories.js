import React from 'react';
import kebabCase from 'lodash/kebabCase';

import SidebarWidget from '../SidebarWidget';
import { IconLink } from '../IconLink';
import useAllCategories from './../../helpers/hooks/useAllCategories';


export default () => {
    const cats = useAllCategories();
    const base = 'category';
    const icon = ['far', 'folder-open'];
    return cats ? 
        <SidebarWidget title="Рубрики">
        { cats.map((cat, i) => (
            <IconLink key={i} 
                to={`/${base}/${kebabCase(cat)}`}
                icon={icon}>
                {cat}
            </IconLink>) )
        }
        </SidebarWidget>
        : null;
};