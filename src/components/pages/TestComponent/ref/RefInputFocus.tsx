import React, {ChangeEvent, useRef, useState} from 'react';
import Flex from '../../../common/Flex/Flex';
import {Button} from '../../../common/Button/Button';

export const RefInputFocus = () => {
  const [name, setName] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const setFocus = () => {
    inputRef.current?.focus()
  }
  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  console.log('rerender')
  return (
    <Flex justify={'center'} direction={'column'}>
      <div style={{marginTop: '15px'}}>
        <input type={'text'} ref={inputRef} value={name} onChange={onChangeNameHandler}/>
        <div style={{wordBreak:'break-word', width:'300px '}}> value of input is : {name}</div>
        <div><Button onClick={setFocus}>set focus to reffed input </Button></div>

      </div>
    </Flex>
  );
};
