import React from 'react'
import styles from './PageTitle.module.scss'

function PageTitle( props ) {
  return <h4 className={styles.PageTitle}>{props.children}</h4>
}

export default PageTitle;