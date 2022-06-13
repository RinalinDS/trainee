import React, {useState} from 'react'

import {RefInputFocus} from './ref/RefInputFocus';
import {Select} from './Select/Select';
import {Radio} from './Radio/Radio';
import {RefInputPrevValue} from './ref/RefInputPrevValue';

export const TestComponent = () => {
  const themes = ['lightblue', 'green', 'yellow']
  const [theme, setTheme] = useState<string>('')
  return (
    <div>
      <Select/>
      <Radio theme={theme} themes={themes} setTheme={setTheme}/>
      <RefInputFocus/>
      <RefInputPrevValue/>
    </div>
  )
}