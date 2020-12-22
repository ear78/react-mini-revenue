import React from 'react'
import styles from './Paragraph.module.scss'

function Paragraph( props ) {
  return <p className={styles.Paragraph}>{props.children}</p>
}

export default Paragraph