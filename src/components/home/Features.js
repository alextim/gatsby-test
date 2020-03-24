import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Flex, Box, Heading, useTheme } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from './../Container'

const StyledFlex = styled(Flex)`
  flex-direction: column;
  ${ props => props.theme.mediaQueries.md } {
      flex-direction: row;
  }
`

const FeatureItemWrap = styled.div`
  display: block;
  flex: 1;
  margin-bottom: 1em;
  padding-right: 1em;
  padding-left: 1em;
  background-color: ${ props => props.theme.home.features.itemBg };

  ${ props => props.theme.mediaQueries.md } {
    margin-bottom: 0;
  }

`

const Features = ({settings}) => {
    const theme = useTheme()
    const { title, subTitle, text, items } = settings

    const FeatureItem = ( { title, text, url, icon } ) => (
        <FeatureItemWrap>
            <Box>
                <Link to={url}>
                    <FontAwesomeIcon icon={icon} size="sm" color={theme.home.features.iconColor}/>
                </Link>
            </Box>
            <Heading as="h3">{title}</Heading>
            <Box>{text}</Box>
        </FeatureItemWrap>
    )
    
    return (
        <Box as="section" width="100%" bg={theme.home.features.bg} py="1.5em" textAlign="center">
            <Container>
                <Box mb="2em">
                    { title && <Heading as="h2" mb="0.625em">{title}</Heading> }
                    { subTitle && <Box>{subTitle}</Box> }
                    { text && <Box mb="1em">{text}</Box> }
                </Box>
                <StyledFlex wrap="wrap" alignItems="center" justifyContent="center">
                {
                    items.map( (item, i) => 
                        <FeatureItem key={i} title={item.title} 
                            text={item.text}
                            url={item.url}
                            icon={item.icon} /> )
                }
                </StyledFlex>
            </Container>
        </Box>
    )
}

export default Features
