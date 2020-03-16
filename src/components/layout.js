/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
//import { useEffect } from 'react'
//import PropTypes from 'prop-types'

import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from './theme'
import Container from './Container'
import Header from './Header'
import Footer from './Footer'
import './layout.scss'
import './fontawesome'

/*
const loadScript = src => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
}
*/
export default props => {
  /*
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);
  */
 
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`

          body {
            box-sizing: border-box; 
            font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-display: swap;
            font-display: fallback;
            overflow-x: hidden;
          }

          a {
            cursor: pointer;
            text-decoration: none;
          }

          body {
            color: #4a4a4a;
            font-size: 1em;
            font-weight: 400;
            line-height: 1.5;
          }


        }
       `}
      />
      <Header />
      <main>
        <Container>
          {props.children}
        </Container>
      </main>      
      <Footer/>
    </ThemeProvider>
  )
}