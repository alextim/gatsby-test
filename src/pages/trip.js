import React from 'react'
import styled from '@emotion/styled'
import { Button, useDisclosure } from '@chakra-ui/core'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Popupform from './../components/forms/Popupform'

export default  ({location}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout>
      <SEO title="Page two" pathname={location.pathname} />
      <HeadWrapper>
        <LeftWrapper>

        </LeftWrapper>
        <RightWrapper>
          <Button onClick={onOpen}>Записаться</Button>
          <Popupform isOpen={isOpen} onClose={onClose} />
        </RightWrapper>
      </HeadWrapper>
    </Layout>
  )
}


export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const LeftWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${ props => props.theme.mediaQueries.md } {
    width: 50%;
  }
`

export const RightWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${ props => props.theme.mediaQueries.md } {
    width: 50%;
  }
`