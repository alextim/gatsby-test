import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

// import logo from './../../../images/adrenalin-logo.svg'
/**
 *
 * http://css.yoksel.ru/a11y-for-logotypes/
 *
 * https://yoksel.github.io/url-encoder/
 * http://css.yoksel.ru/svg-icons/
 * https://tympanus.net/codrops/2020/02/11/how-to-create-a-physics-based-3d-cloth-with-cannon-js-and-three-js/
 * https://joshwcomeau.com/gatsby/seo-friendly-sitemap/
 *
 *
 *
 */

const logoSVG =
  "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 546 106'%3E%3Cpath d='M353.17,143.8H297.35c-.2,0-.28.14-.18.31l7.92,13.69a.68.68,0,0,0,.54.31h3.18a.36.36,0,0,1,.36.36v48.28a.36.36,0,0,0,.36.36H323.1a.36.36,0,0,0,.36-.36V160a.47.47,0,0,0-.35-.44l-5.71-1.34c-.19,0-.19-.08,0-.08h21.45a.36.36,0,0,1,.36.36v7.72a1.58,1.58,0,0,1-.18.67l-7.11,12.32a.69.69,0,0,0,0,.62l15.59,27a.69.69,0,0,0,.54.31h15.8c.2,0,.28-.14.18-.31l-15.58-27a.68.68,0,0,1,0-.62l4.89-8.47a1.59,1.59,0,0,0,.18-.67c0-2.93,0-22.94,0-25.87a.36.36,0,0,0-.36-.36' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M394,143.8H359.58a.36.36,0,0,0-.36.36v42.47a1.58,1.58,0,0,0,.18.67l11.24,19.49a.69.69,0,0,0,.54.31h35.88a.36.36,0,0,0,.36-.36V193.17a.36.36,0,0,0-.36-.36H367.48c-.2,0-.2,0,0-.08l5.71-1.33a.47.47,0,0,0,.35-.44V180.88a.36.36,0,0,1,.36-.36H397a.36.36,0,0,0,.36-.36v-9.42a.36.36,0,0,0-.36-.36H367.48c-.2,0-.2,0,0-.08l5.71-1.34a.47.47,0,0,0,.35-.44V158.46a.36.36,0,0,1,.36-.36h28.36c.2,0,.28-.14.18-.31l-7.92-13.69a.68.68,0,0,0-.54-.31' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M209.94,192.81c-.2,0-.2,0,0-.08l6.69-1.57a.94.94,0,0,0,.53-.39l10.42-18a.19.19,0,0,1,.36,0l11.41,19.76c.1.17,0,.31-.18.31H209.94M227.75,144a.22.22,0,0,0-.18.13L199.63,192.5a.68.68,0,0,1-.54.31h-8.94c-.2,0-.28-.14-.18-.31l7.18-12.44c.09-.15,0-.26-.12-.26H197l-48.17,7c-.2,0-.19.07,0,.09l27.57,2.91a.22.22,0,0,1,.18.35L167,206.79c-.1.17,0,.31.18.31h96.77c.2,0,.28-.14.18-.31l-36.19-62.68a.22.22,0,0,0-.18-.13' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M279.69,192.8a.69.69,0,0,1-.54-.31l-18.66-32.33a1,1,0,0,0-.53-.39l-6.72-1.58c-.19,0-.19-.08,0-.08h28.36a.69.69,0,0,1,.54.31L289,170.23a1.57,1.57,0,0,1,.18.67v21.54a.36.36,0,0,1-.36.36h-9.1m10.18-49h-55c-.2,0-.28.14-.18.31l36.19,62.68a.68.68,0,0,0,.54.31H303.1a.36.36,0,0,0,.36-.36V167.07a1.58,1.58,0,0,0-.18-.67l-12.87-22.29a.69.69,0,0,0-.54-.31' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M583.87,143.8H558.11c-.2,0-.28.14-.18.31l7.92,13.69a.68.68,0,0,0,.54.31h3.18a.36.36,0,0,1,.36.36v48.28a.36.36,0,0,0,.36.36h13.59a.36.36,0,0,0,.36-.36V144.16a.36.36,0,0,0-.36-.36' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M460.58,143.8H447a.36.36,0,0,0-.36.36v32.57c0,.11,0,.16-.06.16s-.07,0-.12-.12L427.6,144.12a.68.68,0,0,0-.54-.31H401.3c-.2,0-.28.14-.18.31L409,157.8a.69.69,0,0,0,.54.31h3.18a.36.36,0,0,1,.36.36v48.28a.36.36,0,0,0,.36.36h13.59a.36.36,0,0,0,.36-.36V174.2c0-.11,0-.16.06-.16s.07,0,.12.12l18.85,32.64a.68.68,0,0,0,.54.31h13.6a.36.36,0,0,0,.36-.36V144.16a.36.36,0,0,0-.36-.36' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M638.83,143.8H625.24a.36.36,0,0,0-.36.36v32.57c0,.11,0,.16-.06.16s-.07,0-.12-.12l-18.86-32.66a.68.68,0,0,0-.54-.31H591.72a.36.36,0,0,0-.36.36v62.59a.36.36,0,0,0,.36.36h13.59a.36.36,0,0,0,.36-.36V174.2c0-.11,0-.16.06-.16s.07,0,.12.12l18.85,32.64a.68.68,0,0,0,.54.31h51.27c.2,0,.28-.14.18-.31l-9.58-16.6a.22.22,0,0,1,.18-.35l27.57-2.91c.2,0,.2-.06,0-.09l-48.17-7h-.06c-.15,0-.21.11-.12.26l7.19,12.44c.1.17,0,.31-.18.31H633.14c-.2,0-.2,0,0-.08l5.71-1.34a.47.47,0,0,0,.35-.44V144.16a.36.36,0,0,0-.36-.36' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M531.83,143.8H506c-.2,0-.28.14-.18.31l7.92,13.69a.68.68,0,0,0,.54.31h3.23a.36.36,0,0,1,.36.36V181a1.58,1.58,0,0,0,.18.67l14.49,25.09a.69.69,0,0,0,.54.31h30.78a.36.36,0,0,0,.36-.36V180.1c0-.14-.07-.22-.17-.22a.28.28,0,0,0-.14,0l-13.69,7.92a.69.69,0,0,0-.31.54v4.07a.36.36,0,0,1-.36.36H527.64c-.2,0-.2,0,0-.08l4.21-1a.47.47,0,0,0,.35-.44V144.16a.36.36,0,0,0-.36-.36' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M471.57,192.81c-.2,0-.2,0,0-.08l6.73-1.57a.94.94,0,0,0,.53-.39l10.42-18a.19.19,0,0,1,.36,0L501,192.49c.1.17,0,.31-.18.31H471.57M489.41,144a.22.22,0,0,0-.18.13l-22.41,38.82a1.57,1.57,0,0,0-.18.67v23.14a.36.36,0,0,0,.36.36h58.6c.2,0,.28-.14.18-.31l-36.19-62.68a.22.22,0,0,0-.18-.13' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M312.1,228V249.5h-6.86V228H292.89v-5.92h31.56V228Z' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M369.47,231.07a9.79,9.79,0,0,1-.47,3.18,8.3,8.3,0,0,1-1.24,2.37,7.69,7.69,0,0,1-1.73,1.67,9.78,9.78,0,0,1-1.94,1.06l4.78,10.16h-7.37l-4.39-9.37H342.73v9.37h-6.9V222.05h24.66a11.08,11.08,0,0,1,2.65.39,8.86,8.86,0,0,1,3,1.39,8.23,8.23,0,0,1,2.39,2.74A9.11,9.11,0,0,1,369.47,231.07Zm-6.9,0a3.14,3.14,0,0,0-.35-1.59,2.75,2.75,0,0,0-.86-.94,3.16,3.16,0,0,0-1-.45,4.11,4.11,0,0,0-.84-.12H342.73v6.23h16.74a3.22,3.22,0,0,0,.74-.14,3.54,3.54,0,0,0,1-.49,3.24,3.24,0,0,0,.92-1A2.81,2.81,0,0,0,362.57,231.07Z' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M411.7,249.5,408.52,244H389.19L386,249.5h-7.33l15.76-27.45h8.82L419,249.5Zm-12.82-22.31-6.27,10.9h12.55Z' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M449.57,249.5h-8.78l-14.31-27.45h7.65l11.06,21.64,11.06-21.64h7.65Z' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M473.88,249.5V222.05h33.05V228H480.78v4.94h23v5.33h-23v5.33H508v5.92Z' transform='translate(-148.67 -143.8)'/%3E%3Cpath d='M519.52,249.5V222.05h6.9v21.53h24.35v5.92Z' transform='translate(-148.67 -143.8)'/%3E%3C/svg%3E";

const StyledLink = styled(Link)`
  display: block;
  text-indent: -9999px;
  width: 112px;
  height: 28px;
  background: url("data:image/svg+xml,${logoSVG}") center center no-repeat;
`;

const Brand = () => <StyledLink rel="home" to="/" />;

export default Brand;
