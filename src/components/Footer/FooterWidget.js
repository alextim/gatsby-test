import React from "react"

import styled from "@emotion/styled"

const FooterWidget = ( {title, children} ) => {
  
  const Title = styled.h3`
    color: ${props => props.theme.footer.colors.highlited};
    font-weight: 400;
    margin: 0 0 10px;
    line-height: 1.5;
    padding: 0;
    &:after {
      display: block;
      content: "";
      height: 2px;
      background: ${props => props.theme.footer.colors.widgetTitleUnderline};
      width: 50px;
      margin-top: 10px;
      margin-bottom: 20px;
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