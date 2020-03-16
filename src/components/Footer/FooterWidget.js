import React from 'react'

import styled from '@emotion/styled'

const FooterWidget = ( {title, children} ) => {
  
  const Title = styled.h3`
    color: ${props => props.theme.footer.colors.highlited};
    font-weight: ${props => props.theme.fontWeights.body};
    margin: 0 0 ${props => props.theme.space[3]}px;
    line-height: ${props => props.theme.lineHeights.heading};
    padding: 0;
    &:after {
      display: block;
      content: "";
      height: 2px;
      background: ${props => props.theme.footer.colors.widgetTitleUnderline};
      width: ${props => props.theme.space[5]}px;
      margin-top: ${props => props.theme.space[3]}px;
      margin-bottom: ${props => props.theme.space[4]}px;
    }
    ${props => props.theme.mediaQueries.m}: {
      font-size: 1.125rem;
    }
  `

  return (
    <>
        <Title>{title}</Title>
        {children}
    </>
  )
}


export default FooterWidget