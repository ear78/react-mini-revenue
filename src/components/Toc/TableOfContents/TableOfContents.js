import React from 'react';
import styles from './TableOfContents.module.scss';

const tableOfContents = ( props ) => {
  return (
    <li>{props.product}
      <ol className={styles.Sub}>
          <li>{props.table}</li>
      </ol>
    </li>
  )
}

export default tableOfContents;
