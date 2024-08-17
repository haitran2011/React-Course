import React from 'react'

import styles from './heading.module.css'

function Heading({ text }) {
  return (
    <div className={styles.heading}>{text}</div>
  )
}

export default Heading