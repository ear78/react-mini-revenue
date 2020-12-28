import React from 'react';
import './TableOfContents.css';

const tableOfContents = ( props ) => {
  return (
    <li>{props.product}
                        <ol className="sub">
                            <li className="">{props.table}</li>
                        </ol>
                    </li>
  )
}

export default tableOfContents;