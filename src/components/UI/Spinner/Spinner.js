import React from 'react'
import styles from './Spinner.module.scss'

function Spinner( props ) {
  let showSpinner = props.loading ? 'block' : 'none'
  return <div style={{display: 'block'}} className={styles.Spinner}>
          <div className={styles.Circle}>
            <div className={styles.Circle2}></div>
          </div>
        </div>
}

export default Spinner