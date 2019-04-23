import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Button.css'

const Button = (props) => {
  const link = props.link ? props.link : '/';
  const { buttonLabel } = props;
  return (
    <div className={styles.parent}>
      <Link className={styles.link} to={link}>
        <div className={styles.button}>
          {buttonLabel}
        </div>
      </Link>
    </div>
  )
}

export default Button;
