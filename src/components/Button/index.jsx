import React from 'react'
import styles from "./styles.module.css";

const Button = ({ type }) => {
  return (
    <button className={type === 'Submit' ? styles.btnSubmit : styles.btnReset} type={type}>
      {type}
    </button>
  )
}

export default Button;
