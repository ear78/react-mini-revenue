import React from 'react';

import './Home.css';
import Line from '../UI/Line/Line';
import Modal from '../UI/Modal/Modal';

class Home extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      modalIsOpen: false,
      showBlock: false
    }
  }

  showModal = () => {
    this.setState( {
      modalIsOpen: true
    } )
  }

  hideModal = () => {
    this.setState( {
      modalIsOpen: false
    } )
  }
  render() {
    return (
      <div className="home">
                <Line />
                <p>
                    Please <span>navigate</span> through the <span className="app-span">app</span> to see the different mini projects. Built with React Js and Sass using CSS Modules.
                </p>
            </div>

    )
  }
}

export default Home;