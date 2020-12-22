import React, {
  Component
} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Charts from './components/Charts/Charts';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Tables from './components/Tables/Tables';
import Toc from './components/Toc/Toc';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
              <Home exact path="/" component={Home} />
              <Tables path="/tables" component={Tables}/>
              <Charts path="/charts" component={Charts}/>
              <Toc path="/toc" component={Toc}/>
          </Switch>

      </div>
    );
  }
}

export default App;