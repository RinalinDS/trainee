import React, {FC} from 'react'
import styles from '../../App.module.scss';


type ToggleType = {
  value: boolean
  onChange: () => void
  children: React.ReactNode
}

export const Toggler: FC<ToggleType> = ({value, onChange, children}) => {

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <label htmlFor="toggler">
          <input
            id="toggler"
            type="checkbox"
            onClick={onChange}
            checked={value}
            readOnly
          />
        </label>
      </div>
      <div className={styles.theme}>
        {children}
      </div>

    </div>

  )
}

