import React from 'react';
// import Transition from 'react-transition-group/Transition';

import './Home.css';
import Line from '../UI/Line/Line';
import Modal from '../UI/Modal/Modal';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            showBlock: false
        }
    }

    showModal = () => {
        this.setState({modalIsOpen: true})
    }

    hideModal = () => {
        this.setState({modalIsOpen: false})
    }
    render(){
        return(
            <div className="home">
                <Line />
                <p>
                    Please <span>navigate</span> through the <span className="app-span">app</span> to see the different mini projects.
                </p>
                {/*
                    <button onClick={this.showModal} style={{width: '160px', display: 'block', margin: '0 auto'}} className="button tiny">Click For Modal</button>
                    <Transition in={this.state.modalIsOpen} timeout={300}>
                        {state => (
                            <Modal
                                show={this.state.modalIsOpen} close={this.hideModal}/>
                        )}
                    </Transition>
                */}


                {/*
                    <button className="button tiny" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
                    <Transition in={this.state.showBlock} timeout={300}>
                        {state => (<div style={{
                            width: '90%',
                            height: '200px',
                            backgroundColor: 'lightblue',
                            transition: 'opacity 1s ease-out',
                            opacity: state === 'exited' ? 0 : 1
                        }}></div>)}

                    </Transition>
                */}


            </div>

        )
    }
}

export default Home;
