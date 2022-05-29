import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './style/Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  >

type SuperButtonPropsType = DefaultButtonPropsType & {

}

export const Button: FC<SuperButtonPropsType> = (props) => {

  return <button type="button" className={styles.button} {...props} />

};

