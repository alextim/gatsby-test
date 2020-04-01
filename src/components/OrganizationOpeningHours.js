import React from 'react'
import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/core'

import useOrganizationOpeningHours from './../helpers/hooks/useOrganizationOpeningHours'

const Wrapper = styled(Grid)`
  grid-template-columns: 2em 3em 1em auto;
`

const TimeRow = ({dow, timeStart, timeFinish}) => (
  <>
    <div>{dow}:</div>
    <div>{timeStart}</div>
    <div>-</div>
    <div>{timeFinish}</div>
  </> 
)

export default () => {
  const openingHours = useOrganizationOpeningHours()
  const dow = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт' , 'Сб', 'Вс' ]



  return (
    <Wrapper>
    { 
      openingHours.map( (time, i) => (
        <TimeRow key={i} dow={dow[i]} timeStart={time[0]} timeFinish={time[1]}/>
      ))
    }
    </Wrapper>
  )
}

