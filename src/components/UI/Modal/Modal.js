import React from 'react';
import './Modal.css';

const modal = (props) => {
    const cssClasses = ['modal', props.show ? 'modalOpen' : 'modalClose'];

    return (
        <div className={cssClasses.join(' ')}>
            <button className="button tiny" onClick={props.close}>Close Modal</button>
        </div>
    )
}

export default modal;
