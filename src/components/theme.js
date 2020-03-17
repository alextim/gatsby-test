// example theme.js
//https://theme-ui.com/theme-spec


const theme = {
    /*************
     * Prefix	Description
     * https://basscss.com/
xs-	below 40em
sm-	40em – 52em
md-	52em – 64em
lg-	above 64em
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

  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
    orange: '#ff7550',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
    brands: {
  //    skype:    'rgb(0, 175, 240)',
      viber:    '#bcaec7',
      whatsapp: '#25d366',
      telegram: '#0088cc',    
    }
  },


  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],

  sizes: {
    avatar: 48,
    container: {
      min: 320,
      max: 1366,
    },
  },

  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },

  forms: {
    input: {
      color: 'primary',
    },
    select: {
      borderRadius: 9999,
    },
    textarea: {},
    label: {},
    radio: {},
    checkbox: {},
// example theme with variants
    largeInput: {
      fontSize: 3,
      px: 3,
      py: 2,
    }
  },
  
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    link: {
      color: 'primary',
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      }
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
//      fontWeight: 'bold',
      color: 'highlite',
      bg: 'orange',
      borderRadius: 'default',
      px: 3,
      py: 2
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },

  footer: {
    colors: {
      text: "#ddd",
      highlited: "#fff",
      bg: "#252831",
      colophonTopBg: "#2c3038",
      colophonBottomBg: "#414244",
      widgetTitleUnderline: "#ff7550",
    },
    mbWidgetLink: "0.4375rem",
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