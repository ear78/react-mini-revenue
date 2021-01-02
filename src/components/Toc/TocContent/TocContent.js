import React from 'react';
import styles from './TocContent.module.scss';

function TocContent( props ) {
  return <div className={styles.Content}>
          <h1>{props.content.title}</h1>
          <h4>{props.content.table}</h4>
          <p>{props.content.contents}</p>
      </div>
}

export default TocContent