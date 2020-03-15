import React from "react"

import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

const FooterWidget = ( {title, children, theme} ) => {

  const Wrapper = styled.div`
    color: ${theme.footer.colors.text};
  `
  const Title = styled.h3`
    color: ${theme.footer.colors.highlited};
    font-weight: 400;
    margin: 0 0 10px;
    line-height: 1.5;
    padding: 0;
    &:after {
      display: block;
      content: "";
      height: 2px;
      background: ${theme.footer.colors.widgetTitleUnderline};
      width: 50px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    ${theme.mediaQueries.m}: {
      font-size: 1.125rem;
    }
  `

  return (
    <Wrapper>
        <Global
          styles={css`
          a {
              color: ${theme.footer.colors.text};
              &:hover {
                color: ${theme.footer.colors.highlited};
              }              
            }
        `}
        />
        <Title>{title}</Title>
        {children}
    </Wrapper>
  )
}


export default FooterWidget