// example theme.js



const theme = {
    /*************
     * 
     * 1em = 16px
     * 
     *   640 - 40
     * mobile: up to 768px - 48
     * tablet: from 769px
     * 832 -52
     * desktop: from 1024px - 64
     * widescreen: from 1216px -76
     * fullhd: from 1408 - 88
     * 
     * 640, 832, 1024
     * 
     * $gap	size	32px	
$tablet	size	769px	
$desktop	computed	960px + (2 * $gap)	
$widescreen	computed	1152px + (2 * $gap)	
$fullhd	computed	1344px + (2 * $gap)
     * 
     * 
     * 
     */
    
    
    
    breakpoints: ['40em', '48em', '64em', '76em'],

    fontSizes: [
      12, 14, 16, 20, 24, 32, 48, 64
    ],
    colors: {
      blue: '#07c',
      lightgray: '#f6f6ff'
    },
    space: [
      0, 4, 8, 16, 32, 64, 128, 256
    ],
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    shadows: {
      small: '0 0 4px rgba(0, 0, 0, .125)',
      large: '0 0 24px rgba(0, 0, 0, .125)'
    },
    variants: {
    },
    text: {
    },
    buttons: {
      primary: {
        color: 'white',
        bg: 'primary',
      }
    },
    footer: {
        colors: {
          text: "#ddd",
          highlited: "#fff",
          bg: "#252831",
          colophonTopBg: "#2c3038",
          colophonBottomBg: "#414244",
          widgetTitleUnderline: "#ff7550",
        }
    },
}

theme.mediaQueries = [
  `@media screen and (min-width: ${theme.breakpoints[0]})`,
  `@media screen and (min-width: ${theme.breakpoints[1]})`,
  `@media screen and (min-width: ${theme.breakpoints[2]})`,
  `@media screen and (min-width: ${theme.breakpoints[3]})`,
]
theme.mediaQueries.xs = theme.mediaQueries[0];
theme.mediaQueries.s  = theme.mediaQueries[1];
theme.mediaQueries.m  = theme.mediaQueries[2];
theme.mediaQueries.l  = theme.mediaQueries[3];

export default theme