import React from 'react';

function ListItem( props ) {
  return (
    <li onClick={props.click} ref={props.inputRef}>{props.item}</li>
  )
}

export default ListItem;