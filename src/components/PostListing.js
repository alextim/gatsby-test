import React from 'react';
import styled from '@emotion/styled';

import NewsCard from '../components/NewsCard';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${ props => props.theme.mediaQueries.lg } {
        flex-direction: row;
    }
`;

const ItemWrap = styled.div`
    width: 100%;
    ${ props => props.theme.mediaQueries.lg } {
        width: 50%;
    }
`;

export default ({ posts }) => (
    <Wrapper>
    {   
        posts.map( (post, i) =>
            <ItemWrap key={i}>
                <NewsCard post={post} />
            </ItemWrap>
        )
    }
    </Wrapper>
);
