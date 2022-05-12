import React, {ChangeEvent, useState} from 'react';
import  s from './Select.module.css'


const Radio = () => {
    const themes = ['lightblue', 'green', 'yellow']
    const [theme, setTheme] = useState<string>('')
    const setThemeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setTheme(e.target.value)
    }

    return (
        <div className={`${s[theme]} ${s.radio}` }>

            {themes.map((m,i) =>
                <span key={`${i + m}`}>
                <input type={'radio'} value={m} name={m} checked={m === theme} onChange={setThemeHandler}/>
                    {m}
                </span>
            )}

        </div>
    );
};

export default Radio;