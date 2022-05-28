import React, {ChangeEvent, FC} from 'react'


type ToggleType = {
  value: boolean
  onChange: (value: boolean) => void
  children: React.ReactNode
}

export const Toggle: FC<ToggleType> = ({value, onChange, children}) => {
  const onClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.checked)
  }
  return (
    <div>
      <label htmlFor="toggler">
        <input
          id="toggler"
          type="checkbox"
          onChange={onClickHandler}
          checked={value}
          readOnly
        />
        {children}
      </label>
    </div>

  )
}

export default Toggle