import React, {ChangeEvent, useState} from 'react'
import s from './Select.module.css'

const options = [1, 2, 3, 4, 5]

export const Select = () => {
  const [value, setValue] = useState<number>(options[0])
  const mappedOptions = options.map((m, i) => <option key={i}>{m} </option>)
  const onSelectValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(+e.target.value)
  }


  return (
    <>
      <div className={s.select}>
        <div>
          <select onChange={onSelectValueChange} value={value}>
            {mappedOptions}
          </select>

        </div>
        <div>Selected value : {value}</div>
      </div>

    </>
  )
}