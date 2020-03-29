import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'

import curriedDarken from 'polished/lib/color/darken';


const sizes = {
    tablet: '1200px',
    phone: '600px',
};

const media = {
    tablet: `(max-width: ${sizes.tablet})`,
    phone: `(max-width: ${sizes.phone})`,
};

const colors = {
    white: {
      base: '#fff',
      light: '# f0f0f0',
      gray: '#cecece',
      dark: '# a0afd7',
    },
    black: {
      base: '#333438',
      light: '#4b4e57',
      blue: '#2e3246',
    },
    grey:{
        light: '#D3D3D3',
    },
    primary: {
      base: '#3498db',
      light: '#3e5fbc',
      dark: '#284187',
    },
    background: {
      light: '#3e5fbc',
      dark: '#284187',
    },
  };
  
  const shadow = {
    card: '0 20px 30px rgba (0, 0, 0, 0.1)',
    image: '0 15px 25px rgba (0, 0, 0, 0.1)',
    suggestion: '0 -5px 30px rgba (0,0,0,0.2)',
    footer: '0 -3px 26px rgba (0,0,0,0.5)',
    feature: {
      big: {
        default: '0 40px 40px rgba (0, 0, 0, 0.2)',
        hover: '0 50px 50px rgba (0, 0, 0, 0.1)',
      },
      small: {
        default: '0 15px 25px rgba (0, 0, 0, 0.2)',
        hover: '0 40px 45px rgba (0, 0, 0, 0.1)',
      },
    },
    text: {
      small: '0 5px 10px rgba (0, 0, 0, 0.25)',
      big: '0 15px 20px rgba (0, 0, 0, 0.13)',
    },
  };
  
  const gradient = {
    // eslint-disable-next-line
    leftToRight: `linear-gradient (-45deg, $ {colors.background.light} 0%, $ {colors.background.dark} 100%)`,
    // eslint-disable-next-line
    rightToLeft: `linear-gradient (45deg, $ {colors.background.light} 0%, $ {colors.background.dark} 100%)`,
  };
  
  const transition = {
    easeInOutCubic: 'cubic-bezier (0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier (0.175, 0.885, 0.32, 1.275)',
    duration: '0.4s',
  };
  
  const theme = {
    colors,
    gradient,
    shadow,
    breakpoints: {
      xs: '400px',
      s: '600px',
      m: '900px',
      l: '1200px',
    },
    fontFamily: {
      // eslint-disable-next-line
      body: `Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
      // eslint-disable-next-line
      heading: `Candal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    },
    layout: {
      article: '46rem',
      base: '70rem',
      big: '83 .33333rem ',
    },
    borderRadius: {
      default: '0.4rem',
      round: '100rem',
    },
    transitions: {
      default: {
        duration: transition.duration,
        timing: transition.easeInOutCubic,
        transition: `all $ {transition.duration} $ {transition.easeInOutCubic}`,
      },
      boom: {
        duration: transition.duration,
        timing: transition.easeOutBack,
        transition: `all $ {transition.duration} $ {transition.easeOutBack}`,
      },
      headroom: {
        transition: 'all 0.25s ease-in-out',
      },
    },
  };
  
  

const PaginationContainer = styled.div`
  text-align: center;
  margin: 2rem;
  }
`;

const PaginationContent = styled.div`
    display: inline-block;
    padding: 0 2.5rem;
    border-radius: 3.5rem;
    background-color: #eee;
    
     @media ${media.phone} {
      padding: 0 1rem;
     }

    .page-numbers {
      display: block;
      float:left;
      transition: 400ms ease;
      color: ${theme.colors.grey.light};
      letter-spacing: 0.1em;
      padding: 1rem;

      &:hover,
      &.current {
        background-color: ${curriedDarken(0.2, theme.colors.primary.base)};
        color: ${theme.colors.white.base};
      }
      
      &.prev {
        margin-left: -1.5rem;
      }
      
      &.next {
        margin-right: -1.5rem;
      }

      &.prev:hover,
      &.next:hover {
        background-color: transparent;
        color: ${curriedDarken(0.2, theme.colors.primary.light)};
      }
      

      @media ${media.tablet} {
        padding: 0 1.4rem;
        display: none;

        &:nth-of-type(2) {
          position: relative;
          padding-right: 5rem;

          &::after {
            content: '...';
            position: absolute;
            top: 0;
            left: 4.5rem;
          }
        }

        &:nth-child(-n + 3),
        &:nth-last-child(-n + 3) {
          display: block;
        }

        &:nth-last-child(-n + 4) {
          padding-right: 1.4rem;

          &::after {
            content: none;
          }
        }
      }
    `;

export default ({ currentPage, totalPages, url }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;
    const prevPage = currentPage - 1 === 1 ? `/${url}/` : `/${url}/${(currentPage - 1).toString()}`;
    const nextPage = `/${url}/${(currentPage + 1).toString()}`;

    return totalPages > 1 ? (
      <PaginationContainer>
        <PaginationContent>
          {!isFirst && (
            <Link className="prev page-numbers" to={prevPage} rel="prev">
              ← Prev
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              className={currentPage === i + 1 ? 'page-numbers current' : 'page-numbers'}
              key={`pagination-number${i + 1}`}
              to={`/${url}/${i === 0 ? '' : i + 1}`}
            >
              {i + 1}
            </Link>
          ))}
          {!isLast && (
            <Link className="next page-numbers" to={nextPage} rel="next">
              Next →
            </Link>
          )}
        </PaginationContent>
      </PaginationContainer>
    ) : null;
  }
