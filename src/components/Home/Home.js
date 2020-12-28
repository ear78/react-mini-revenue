import React from 'react';

import styles from './Home.module.scss';
import Line from '../UI/Line/Line';
import Modal from '../UI/Modal/Modal';
import {
  textIntro,
  staggered
} from "../../assets/Animate"

class Home extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      modalIsOpen: false,
      showBlock: false
    }
    this.intro = React.createRef();
  }

  componentDidMount() {
    textIntro( this.intro )
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
      <div className={styles.Home}>
        <div className={`grid-container`}>
          <div className={`grid-x`}>
            <div className={`small-12 medium-10 medium-offset-1 cell text-center`}>
              <Line />
              <p ref={(el) => (this.intro = el)}>
                  Please <span>navigate</span> through the <span className={styles.AppSpan}>app</span> to see the different mini projects. Built with React Js and Sass using CSS Modules, Native JS methods for transforming data, Jest Testing library.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;