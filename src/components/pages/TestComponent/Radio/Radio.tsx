import React, {ChangeEvent, FC} from 'react';
import s from './Select.module.css'

type RadioPropsType = {
  setTheme: (value: string) => void
  theme: string
  themes: string[]
}

export const Radio: FC<RadioPropsType> = ({setTheme, theme, themes}) => {

  const setThemeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value)
  }

  return (
    <div className={`${s[theme]} ${s.radio}`}>

      {themes.map((m, i) =>
        <span key={`${i + m}`}>
                <input type={'radio'} value={m} name={m} checked={m === theme} onChange={setThemeHandler}/>
          {m}
                </span>
      )}

    </div>
  );
};
