import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

import { IPageProps } from '../types/types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import useDefaultBannerImage from '../helpers/hooks/useDefaultBannerImage';
import usePlaceholderImage from '../helpers/hooks/usePlaceholderImage';
import useDestinations from '../helpers/hooks/useDestinations';
import { prepareDestinations } from '../helpers/taxonomy-helpers';

const Item = styled(Link)`
  position: relative;
  overflow: hidden;
  display: inline-block;
  height: 300px;
  width: 100%;
`;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 0.5s;
  :hover {
    transform: scale(1.2);
  }
`;
const SImg = styled(Img)`
  margin: 0;
  width: 100%;
  height: auto;
`;

const Heading = styled.h2`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  height: 3rem;
  color: #fff;
  font-weight: 700;
  text-shadow: 1px 0 #000;
`;

const PAGE_TITLE = 'Все направления';

const DestinationsPage = ({ location }: IPageProps) => {
  // const img = useDefaultBannerImage();
  const placeholder = usePlaceholderImage();
  const data = useDestinations();
  const result = prepareDestinations(data);
  const count = result.length;
  let key = 0;
  let i = 0;
  let n = 0;
  return (
    <Layout title={PAGE_TITLE}>
      <SEO title={PAGE_TITLE} pathname={location.pathname} />
      <h2>Путешествуйте по всему миру с Adrenalin Travel!</h2>
      <Box fontSize="1.5rem" mb="2rem">
        На любой вкус - от Карпат до экзотических и дальних стран.
      </Box>
      <div className="fg fg-gutter">
        {result.map((item) => {
          if (count === 1) {
            n = 1;
          } else if (count === 2 || count === 4) {
            n = 2;
          } else if (count === 3 || count % 3 === 0) {
            n = 3;
          } else {
            if (i < 2) {
              n = 2;
            } else {
              n = 3;
            }
            i++;
          }
          return (
            <div key={key++} className={`fg-c fg-${n}`}>
              <Item to={item.path}>
                <Wrap>
                  <SImg fluid={item.featuredImage ? item.featuredImage : placeholder} />
                  <Heading>{item.title}</Heading>
                </Wrap>
              </Item>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default DestinationsPage;
