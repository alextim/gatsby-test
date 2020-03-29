import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const PaginationWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  justify-content: space-between;
  width: 80%;
  max-width: 770px;
  padding: 25px 0;
  margin: 0px auto;

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px 0;
  }
`

const PageBtn = styled(Link)`
  border-radius: 3px;
  background-color: green;
  border: 1px solid red;
  color: grey;
  padding: 8px 20px;
  min-width: 130px;

  &:hover {
    background-color: grey;
    color: black;
    border: 1px solid blue;
  }

  @media (max-width: 564px) {
    margin-top: 10px;
    width: 100%;
  }
`

const PreviousBtn = styled(PageBtn)`
  order: 1;
  @media (max-width: 564px) {
    order: 2;
  }
`

const NextBtn = styled(PageBtn)`
  order: 3;
`

const Spacer = styled.span`
  display: block;
  min-width: 130px;

  &.previous {
    order: 1;
  }

  &.next {
    order: 3;
  }

  @media (max-width: 564px) {
    display: none;

    &.previous {
      order: 2;
    }

    &.next {
      order: 3;
    }
  }
`

const PageInfo = styled.span`
  order: 2;
  padding: 1em 0;
  @media (max-width: 564px) {
    order: 1;
  }
`

export default ({ currentPage, nbPages, blogPath }) => {
  //const isFirst = currentPage === 1;
  //const isLast = currentPage === nbPages;
  
    const previousUrl = currentPage === 2 ? `/${blogPath}` : `/${blogPath}/${currentPage - 1}`

    return (
      <PaginationWrapper>
        {currentPage !== 1 ? (
          <PreviousBtn to={previousUrl}>‹ Newer posts</PreviousBtn>
        ) : (
          <Spacer className="previous" />
        )}

        <PageInfo>
          Page {currentPage} of {nbPages}
        </PageInfo>

        {currentPage < nbPages ? (
          <NextBtn to={`/${blogPath}/${currentPage + 1}`}>Older posts ›</NextBtn>
        ) : (
          <Spacer className="next" />
        )}
      </PaginationWrapper>
    )

}
