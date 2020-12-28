import React from 'react';

function ListItem( props ) {
  return (
    <li ref={props.inputRef}>{props.item}</li>
  )
}

export default ListItem;