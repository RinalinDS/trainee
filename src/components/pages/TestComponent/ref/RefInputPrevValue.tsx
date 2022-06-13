import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import Flex from '../../../common/Flex/Flex';

export const RefInputPrevValue = () => {
  const [name, setName] = useState<string>('')
  const prevName = useRef('')

  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  useEffect(() => {
    console.log( 'name = ' , name, 'prevName = ', prevName.current)
    prevName.current = name
  }, [name])

  return (
    <Flex justify={'center'} direction={'column'}>
      <div style={{marginTop: '15px'}}>
        <input type={'text'} value={name} onChange={onChangeNameHandler}/>
        <div style={{wordBreak: 'break-word', width: '300px '}}> Current name is : {name} and it used to be {prevName.current}</div>

      </div>
    </Flex>
  );
};
