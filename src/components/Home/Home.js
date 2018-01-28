import React from 'react';
import './Home.css';
import Line from '../UI/Line';

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <Line />
                <p>
                    Please <span>navigate</span> through the <span className="app-span">app</span> to see the different mini projects.
                </p>
            </div>

        )
    }
}

export default Home;
