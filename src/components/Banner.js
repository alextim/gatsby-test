import React from 'react'
import styled from '@emotion/styled'

import { ContainerFullWidth } from './Container'
import PageHeaing from './PageHeading'

const Wrapper = styled(ContainerFullWidth)`
    position: relative;
    text-align: center;
    color: white;
`

const CenteredWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
`
const SImg = styled.img`
    width: 100%;
    height: auto;
`


export default ({ img, title }) => (
        <Wrapper>
            <SImg src={img} />
            <CenteredWrap>
                <PageHeaing>{title}</PageHeaing>
            </CenteredWrap>

        </Wrapper>
)