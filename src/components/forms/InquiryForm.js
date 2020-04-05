import React from 'react'

import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers'
import { FirstNameControl, LastNameControl, EmailControl, NoteControl } from './formControls'

export default () => (
  <InnerWrapper>
    <LeftWrapper>
      <FirstNameControl />
      <LastNameControl />
      <EmailControl />
    </LeftWrapper>
    <RightWrapper>
      <NoteControl />
    </RightWrapper>
  </InnerWrapper>
)