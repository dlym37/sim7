import React, { Component } from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';

import routes from './routes';

class App extends Component {

  render() {
    
    return (
      <div>
        {routes}
      </div>
    );
  }
}



export default withRouter(App);
