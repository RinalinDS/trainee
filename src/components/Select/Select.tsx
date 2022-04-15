import React, {useState} from 'react'
import s from './Select.module.css'

const options = [1, 2, 3, 4, 5]

export const Select = () => {
    const [value, setValue] = useState<number>(1)
    const mappedOptions = options.map((m, i) => <option key={i} value={m} onClick={() => setValue(m)}> {m} </option>)

    return (
        <>
            <div className={s.select}>
                <div>
                    <select value={value} onChange={(e) => setValue(+e.target.value)}>
                        {mappedOptions}
                    </select>
                </div>
                <div>Select value : {value}</div>
            </div>

        </>
    )
}