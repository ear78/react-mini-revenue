import React from 'react';
import './Home.css';
import Line from '../UI/Line/Line';
import Modal from '../UI/Modal/Modal';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false
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
                <button onClick={this.showModal} style={{width: '160px', display: 'block', margin: '0 auto'}} className="button tiny">Click For Modal</button>
                <Modal
                    show={this.state.modalIsOpen} close={this.hideModal}/>
            </div>

        )
    }
}

export default Home;
